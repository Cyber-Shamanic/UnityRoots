/* UnityRoots CreationVault v0.0.2.
 * On-device IndexedDB storage; no upload or external account is involved. */
window.UR_Vault=(()=>{
 const DB='unityroots-creations',STORE='entries',VERSION=1;
 let dbPromise;
 function open(){
  if(dbPromise)return dbPromise;
  dbPromise=new Promise((resolve,reject)=>{
   if(!('indexedDB' in window)){reject(Error('IndexedDB unavailable'));return}
   const req=indexedDB.open(DB,VERSION);
   req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:'id'});s.createIndex('updatedAt','updatedAt',{unique:false})}};
   req.onsuccess=()=>resolve(req.result);
   req.onerror=()=>reject(req.error);
  });
  return dbPromise;
 }
 async function request(mode,action){const db=await open();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,mode),store=tx.objectStore(STORE),req=action(store);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);tx.onabort=()=>reject(tx.error)})}
 const list=async()=>{const r=await request('readonly',s=>s.getAll());return r.sort((a,b)=>String(b.updatedAt).localeCompare(String(a.updatedAt)))};
 const get=id=>request('readonly',s=>s.get(id));
 const remove=id=>request('readwrite',s=>s.delete(id));
 const createId=()=>typeof crypto!=='undefined'&&typeof crypto.randomUUID==='function'
  ?crypto.randomUUID():`ur-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`;
 const clean=input=>{
  const title=String(input.title??'').trim().slice(0,120);
  const body=String(input.body??'').trim().slice(0,12000);
  const kind=['קלף','ברכה','תפילה','רשומה','ליקוט'].includes(input.kind)?input.kind:'רשומה';
  const tags=(Array.isArray(input.tags)?input.tags:String(input.tags??'').split(',')).map(x=>String(x).trim().slice(0,30)).filter(Boolean).slice(0,12);
  if(!title||!body)throw Error('יש למלא כותרת ותוכן.');
  return {title,body,kind,tags};
 };
 async function save(input){
  const safe=clean(input),id=String(input.id||createId()),before=await get(id),now=new Date().toISOString();
  const versions=before?.versions?.slice(-19)??[];
  if(before)versions.push({title:before.title,body:before.body,kind:before.kind,tags:before.tags,updatedAt:before.updatedAt});
  const record={id,...safe,createdAt:before?.createdAt??now,updatedAt:now,versions};
  await request('readwrite',s=>s.put(record));return record;
 }
 async function restore(id,index){
  const item=await get(id),v=item?.versions?.[index];if(!item||!v)throw Error('גרסה לא נמצאה');
  return save({...item,...v,id});
 }
 async function importRecords(items){
  if(!Array.isArray(items)||items.length>1000)throw Error('גיבוי אינו תקין');
  let added=0;
  for(const item of items){
   if(!item||typeof item!=='object')continue;
   const safe=clean(item),id=String(item.id||createId()).slice(0,100);
   const old=await get(id);
   if(old)continue; // Preserve existing local work on import.
   const date=new Date().toISOString();
   const versions=Array.isArray(item.versions)?item.versions.slice(-20).filter(v=>v&&typeof v.body==='string').map(v=>({...clean(v),updatedAt:String(v.updatedAt||date)})):[];
   await request('readwrite',s=>s.put({id,...safe,createdAt:String(item.createdAt||date),updatedAt:String(item.updatedAt||date),versions}));
   added++;
  }
  return added;
 }
 return {open,list,get,save,remove,restore,importRecords};
})();
