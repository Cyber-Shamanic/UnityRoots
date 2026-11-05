/* Dependency-free ZIP packer for already-compressed PNG files.
 * ZIP STORE format: local headers, central directory, end record, CRC-32. */
window.UR_Zip=(()=>{
 const table=new Uint32Array(256);
 for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):(c>>>1);table[n]=c>>>0}
 const crc32=bytes=>{let c=0xffffffff;for(let i=0;i<bytes.length;i++)c=table[(c^bytes[i])&255]^(c>>>8);return(c^0xffffffff)>>>0};
 const enc=new TextEncoder();
 function localHeader(name,size,crc){const nameBytes=enc.encode(name),buf=new ArrayBuffer(30+nameBytes.length),v=new DataView(buf);v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint16(6,0x0800,true);v.setUint16(8,0,true);v.setUint32(14,crc,true);v.setUint32(18,size,true);v.setUint32(22,size,true);v.setUint16(26,nameBytes.length,true);new Uint8Array(buf,30).set(nameBytes);return new Uint8Array(buf)}
 function centralHeader(name,size,crc,offset){const nameBytes=enc.encode(name),buf=new ArrayBuffer(46+nameBytes.length),v=new DataView(buf);v.setUint32(0,0x02014b50,true);v.setUint16(4,20,true);v.setUint16(6,20,true);v.setUint16(8,0x0800,true);v.setUint16(10,0,true);v.setUint32(16,crc,true);v.setUint32(20,size,true);v.setUint32(24,size,true);v.setUint16(28,nameBytes.length,true);v.setUint32(42,offset,true);new Uint8Array(buf,46).set(nameBytes);return new Uint8Array(buf)}
 async function download(files,name,onProgress){
  if(files.length>1000)throw Error('Too many files');
  const parts=[],directory=[];let offset=0;
  for(let i=0;i<files.length;i++){
   const f=files[i],res=await fetch(f.url);if(!res.ok)throw Error('הקובץ '+f.url+' לא נטען');
   const bytes=new Uint8Array(await res.arrayBuffer()),crc=crc32(bytes),local=localHeader(f.name,bytes.length,crc);
   parts.push(local,bytes);directory.push(centralHeader(f.name,bytes.length,crc,offset));offset+=local.length+bytes.length;
   onProgress?.(i+1,files.length);
  }
  const size=directory.reduce((n,b)=>n+b.length,0),end=new ArrayBuffer(22),v=new DataView(end);
  v.setUint32(0,0x06054b50,true);v.setUint16(8,files.length,true);v.setUint16(10,files.length,true);v.setUint32(12,size,true);v.setUint32(16,offset,true);
  const blob=new Blob([...parts,...directory,new Uint8Array(end)],{type:'application/zip'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);
  return blob.size;
 }
 return {download};
})();
