/* UnityRoots v0.0.3 — RoyalArt illustrated UI and original heritage library.
   Original content © 2026 Leon Yakubov (AnLoMinus) · Cyber Shamanic.
   Local preferences and collections stay on the visitor's device. */
'use strict';

const gates=[
 {id:'roots',emoji:'🌳',name:'שער השורשים',theme:'זהות, משפחה ושייכות',verse:'״שְׁאַל אָבִיךָ וְיַגֵּדְךָ״ — דברים ל״ב, ז׳',thought:'הסיפור שלנו אינו קו אחד; הוא עץ רב־ענפים. כל משפחה מוסיפה לו זיכרון, שפה וניגון.',avoid:'אל תבטל מסורת או סיפור של דור אחר.',do:'שאל אדם מבוגר על זיכרון משמעותי, ותעד אותו במילותיו.'},
 {id:'unity',emoji:'🤝',name:'שער האחדות',theme:'כבוד בין שונים',verse:'״הִנֵּה מַה טּוֹב וּמַה נָּעִים שֶׁבֶת אַחִים גַּם יָחַד״ — תהילים קל״ג, א׳',thought:'אחדות אינה אחידות. היא היכולת לשמור על כבוד הדדי גם כשדעותינו אינן זהות.',avoid:'אל תקטין אדם בגלל מנהגו, מוצאו או השקפתו.',do:'הקשב היום לאדם שחושב אחרת ממך, בלי לקטוע.'},
 {id:'responsibility',emoji:'👐',name:'שער הערבות',theme:'אחריות הדדית',verse:'״וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ״ — ויקרא י״ט, י״ח',thought:'כוחה של קהילה ניכר בדרך שבה היא מושיטה יד למי שזקוק לתמיכה.',avoid:'אל תעמוד מנגד כשאפשר לעזור בבטחה.',do:'בדוק מי בסביבתך זקוק לשיחה, סיוע או ליווי.'},
 {id:'kindness',emoji:'🕊️',name:'שער החסד',theme:'נתינה בלי תמורה',verse:'״עוֹלָם חֶסֶד יִבָּנֶה״ — תהילים פ״ט, ג׳',thought:'מעשה קטן, בזמן הנכון, עשוי להאיר יום שלם.',avoid:'אל תהפוך נתינה לתחרות או לבקשת כבוד.',do:'עשה טובה נסתרת אחת, בלי לצפות לגמול.'},
 {id:'heritage',emoji:'📜',name:'שער המורשת',theme:'לימוד ושימור',verse:'״וְהִגַּדְתָּ לְבִנְךָ״ — שמות י״ג, ח׳',thought:'מורשת חיה כשמספרים אותה, לומדים אותה ומשאירים מקום גם לשאלות.',avoid:'אל תעביר סיפור היסטורי בלי לבדוק מה מקורו.',do:'למד מקור אחד וספר אותו במילים ברורות לדור הבא.'},
 {id:'hope',emoji:'✨',name:'שער התקווה',theme:'חוסן ואמונה בטוב',verse:'״קַוֵּה אֶל ה׳ חֲזַק וְיַאֲמֵץ לִבֶּךָ״ — תהילים כ״ז, י״ד',thought:'תקווה איננה עצימת עיניים לקושי; היא בחירה בצעד בונה גם בתוכו.',avoid:'אל תיתן לייאוש להפוך לשפתך היחידה.',do:'כתוב צעד אחד שתוכל לעשות השבוע לטובת עתיד טוב יותר.'},
 {id:'action',emoji:'🌱',name:'שער המעשה',theme:'מידות בחיי היום־יום',verse:'״לֹא הַמִּדְרָשׁ הוּא הָעִקָּר, אֶלָּא הַמַּעֲשֶׂה״ — אבות א׳, י״ז',thought:'מילים מקבלות שורשים כאשר הן הופכות למעשים עקביים.',avoid:'אל תסתפק בהצהרות יפות בלי פעולה.',do:'בחר מידה אחת לתרגול של שבעה ימים ורשום התקדמות.'}
];
const cards=[
 {id:'c01',emoji:'🌳',title:'שורש עמוק',quote:'מי שיודע מאין צמח, מגלה בתוכו כוח להמשיך ולפרוח.',practice:'הקשב לסיפור משפחתי אחד.',gate:'roots'},
 {id:'c02',emoji:'🫶',title:'לב אחד',quote:'לא בכל דבר נסכים, ובכל זאת נוכל לתת מקום ולבנות גשרים.',practice:'החמיא בכנות למי ששונה ממך.',gate:'unity'},
 {id:'c03',emoji:'👐',title:'יד מושטת',quote:'יד אחת מושיטה עזרה, ושתי נשמות מוצאות תקווה.',practice:'הצע היום עזרה מעשית.',gate:'responsibility'},
 {id:'c04',emoji:'🕯️',title:'נר החסד',quote:'נר קטן לא מאבד מאורו כשהוא מדליק נר אחר.',practice:'עשה חסד ללא פרסום.',gate:'kindness'},
 {id:'c05',emoji:'📖',title:'קול הדורות',quote:'כל סיפור שאנו שומרים הוא גשר בין אתמול למחר.',practice:'כתוב זיכרון או מנהג מסורתי.',gate:'heritage'},
 {id:'c06',emoji:'🌅',title:'אור התקווה',quote:'אפילו שביל ארוך נפתח בצעד ראשון של אמונה.',practice:'כתוב מטרה קטנה לשבוע הקרוב.',gate:'hope'},
 {id:'c07',emoji:'⚖️',title:'מידת הכבוד',quote:'כבוד אמיתי נמדד ביחסנו למי שאינו חושב כמונו.',practice:'שוחח ללא שיפוט מהיר.',gate:'unity'},
 {id:'c08',emoji:'🍇',title:'שפע של תודה',quote:'לב שמכיר בטוב מגלה עושר גם ברגעים הפשוטים.',practice:'ציין שלושה דברים שעליהם אתה מודה.',gate:'kindness'},
 {id:'c09',emoji:'🕊️',title:'שלום בבית',quote:'מילה רכה בונה את הבית, וסבלנות שומרת את שעריו.',practice:'בחר משפט מפייס בשיחה הקרובה.',gate:'responsibility'},
 {id:'c10',emoji:'⭐',title:'המעשה הבא',quote:'החלום מגלה כיוון; המעשה נותן לו כנפיים.',practice:'בצע היום צעד אחד קטן.',gate:'action'}
];
const blessings=[
 {id:'b01',name:'ברכה למשפחה',emoji:'🏡',lines:['יהי ביתנו מלא אור ונחמה,','ושלום ישרה בו ברוח טובה.','בריאות תפרח בכל יום מחדש,','וחסד יאיר את הלב המתרגש.','אושר ירווה את שולחן המשפחה,','וכושר ייתן לנו כוח ושמחה.','עושר של דעת ושל טוב יתגלה,','ולחם בשפע לכל אחד יעלה.','נקשיב זה לזה במילים עדינות,','נחבק גם ברגעי חולשה ושונות.','יחד נצמח לאהבה וברכה,','ונלך באור של תקווה והצלחה.']},
 {id:'b02',name:'ברכת אחדות ישראל',emoji:'🤝',lines:['מכל קהילה יעלה אור חדש,','מכל שפה יישמע לב נרגש.','נכבד את הדרך של איש ואישה,','ונאיר את השביל באהבה פשוטה.','לא נחפש אשמה או מריבה,','נבחר בשיחה, בהקשבה ובקרבה.','בין בית לבית נבנה גשרים,','נישא יחד חלומות וזיכרונות יקרים.','לכאב של הזולת ניתן מקום,','ולעולם נרבה חסד ושלום.','אחווה תפרח מן השורש עד ענף,','וכל לב ימצא בו מקום ומשען.']},
 {id:'b03',name:'ברכה לרפואה ולכוח',emoji:'🌿',lines:['מי ייתן ויפציע אור בוקר מרפא,','והלב יתמלא במנוחה יפה.','לגוף נבקש רגיעה וכוחות,','ולנפש מרחב לנשום ולחיות.','סבלנות תלווה כל צעד קטן,','והתקווה תחזק אותנו בזמן.','נכיר בכאב בלי לאבד את האור,','נבחר במנוחה, בחמלה ובדרור.','עזרה טובה תבוא בשעת צורך,','וחבר נאמן יאיר לנו את הדרך.','בריאות ושלווה יוסיפו לפרוח,','וימי הטוב יתחדשו עם הכוח.']},
 {id:'b04',name:'ברכת פרנסה ומעשה',emoji:'✨',lines:['נפתח את היום במחשבה בהירה,','ונצעד בחריצות ובכוונה ישרה.','מעשה ידינו יניב פרי ברכה,','ופרנסה בכבוד תבוא עם הצלחה.','לא נשכח את האדם מאחורי העבודה,','ולא נוותר על יושר והודיה.','נלמד, ניצור ונחדש בשמחה,','נפתח גם לאחרים דלת של צמיחה.','כוח הגוף יישמר במנוחה,','וכוח הלב ישגשג באהבה.','כל הישג קטן נודה עליו היום,','וביתנו יתמלא בשפע ובשלום.']},
 {id:'b05',name:'ברכת שלום ותקווה',emoji:'🕊️',lines:['נבקש שקט ברחובות ובבתים,','ושלווה בלבבות של כל האנשים.','נדע להשיב ברכות במקום כעס,','ולשמור על כבוד גם בשעת לחץ.','נסלול נתיבים של שיח ופיוס,','נאיר את החשכה באמונה ובחסד.','נושיט יד לאדם שזקוק למגן,','ונזכור שכל לב מבקש להתאזן.','הדורות הבאים יירשו דרך של אור,','בית של תקווה וזיכרון שאפשר לשמור.','תשרה ברכה בארץ ובכל מקום,','ונזכה לימים של חיים ושלום.']}
];
const eras=[
 {period:'שורשים עתיקים',title:'הסיפור המקראי והנביאים',text:'ספרי המקרא מציגים מסורות, סיפורי משפחה, חוקים ושירה שעיצבו את הזיכרון התרבותי והדתי של העם.'},
 {period:'ימי הבית השני',title:'ירושלים, לימוד וקהילות',text:'בתקופת הבית השני התפתחו מרכזי פולחן, לימוד ושיח; מקורות מתקופה זו ממשיכים לעורר מחקר ולימוד.'},
 {period:'לאחר חורבן הבית',title:'תורה שבעל פה וחיי קהילה',text:'חכמים וקהילות עיצבו מסורות לימוד, תפילה ומנהגים שחצו גבולות ושפות.'},
 {period:'ימי הביניים',title:'פסיקה, פיוט, פילוסופיה ופרשנות',text:'יצירות יהודיות נכתבו במרחבים מגוונים: צפון אפריקה, המזרח התיכון, אירופה ועוד.'},
 {period:'העת החדשה',title:'תמורות, השכלה והתחדשות',text:'קהילות התמודדו עם שינויים חברתיים ופוליטיים, הגירה, אתגרים ותנועות תרבותיות חדשות.'},
 {period:'המאה ה־20',title:'שואה, הצלה ובנייה מחדש',text:'זכר השואה והניצולים מחייב לימוד, הנצחה ואחריות נגד אנטישמיות ושנאה.'},
 {period:'1948 ואילך',title:'מדינת ישראל ופזורות העם',text:'עם הקמת המדינה בשנת 1948 נפתח פרק מדיני חדש; במקביל ממשיכות להתקיים קהילות יהודיות ברחבי העולם.'},
 {period:'הדורות הבאים',title:'מסורת חיה ועתיד משותף',text:'ההמשך נכתב במעשי חסד, לימוד, יצירה, כבוד הדדי ודאגה לאחר — יום אחר יום.'}
];
const symbols=[
 ['s01','עץ שורשים','שורשים'],['s02','ענף זית','שלום'],['s03','רימון השפע','חגים'],['s04','שופר האור','חגים'],
 ['s05','מנורת הזהב','מורשת'],['s06','לוחות הברית','מורשת'],['s07','יונת השלום','שלום'],['s08','לב וידיים','חסד'],
 ['s09','שער ירושלים','מורשת'],['s10','ספר פתוח','מורשת'],['s11','נרות שבת','חגים'],['s12','גביע קידוש','חגים'],
 ['s13','כוכב האחדות','אחדות'],['s14','טלית','מורשת'],['s15','תפילין','מורשת'],['s16','חלות שבת','חגים'],
 ['s17','קופת צדקה','חסד'],['s18','גשר האחדות','אחדות'],['s19','תוף מרים','מורשת'],['s20','ארבעת המינים','חגים'],
 ['s21','חנוכייה','חגים'],['s22','שיבולי ברכה','שורשים'],['s23','חמסה','מורשת'],['s24','נר זיכרון','זיכרון']
];
const state={view:'home',search:'',filter:'all',artFilter:'all',taskSearch:'',favorites:new Set(),flipped:new Set(),settings:{scale:1,contrast:false,motion:false,serif:false},tasks:[],taskOverrides:{},listMode:'all',vaultFilter:'',vaultEntries:[]};
const app=document.getElementById('appContent'),modalLayer=document.getElementById('modalLayer'),modalBody=document.getElementById('modalBody');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const findText=(...things)=>things.join(' ').toLocaleLowerCase('he-IL').includes(state.search.trim().toLocaleLowerCase('he-IL'));
const storage={
 get(key,fallback){try{const v=localStorage.getItem('unityroots:'+key);return v===null?fallback:JSON.parse(v)}catch{return fallback}},
 set(key,val){try{localStorage.setItem('unityroots:'+key,JSON.stringify(val))}catch{toast('לא ניתן לשמור בדפדפן זה.')}}
};
const seedFav=storage.get('favorites',[]);if(Array.isArray(seedFav))state.favorites=new Set(seedFav.filter(x=>typeof x==='string'));
const seedSettings=storage.get('settings',{});if(seedSettings&&typeof seedSettings==='object')state.settings={...state.settings,...seedSettings};
const seedTasks=storage.get('tasks',{});if(seedTasks&&typeof seedTasks==='object')state.taskOverrides=seedTasks;

function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),3200)}
function go(view){state.view=view;state.filter='all';state.search='';document.getElementById('globalSearch').value='';location.hash=view==='home'?'':view;document.querySelectorAll('.nav-item').forEach(btn=>{const active=btn.dataset.view===view;btn.classList.toggle('active',active);if(active)btn.setAttribute('aria-current','page');else btn.removeAttribute('aria-current')});document.getElementById('sidebar').classList.remove('open');document.getElementById('menuBtn').setAttribute('aria-expanded','false');render();scrollTo({top:0,behavior:state.settings.motion?'instant':'smooth'})}
function render(){const views={home:renderHome,gates:renderGates,cards:renderCards,blessings:renderBlessings,heritage:renderHeritage,gallery:renderGallery,artvault:renderArtVault,todo:renderTodo,favorites:renderFavorites,search:renderSearch,vault:renderVault};(views[state.view]||renderHome)()}
const header=(k,t,p)=>`<div class="page-heading"><div class="kicker">${esc(k)}</div><h1>${esc(t)}</h1><p>${esc(p)}</p></div>`;
const sectionHead=(k,t,description,view)=>`<div class="section-head"><div><div class="kicker">${esc(k)}</div><h2>${esc(t)}</h2><p>${esc(description)}</p></div>${view?`<button class="text-link" data-view="${view}">לכל היצירות ←</button>`:''}</div>`;
const noResults=()=>`<div class="empty"><strong>לא נמצאו תוצאות</strong><p>נסו מילה אחרת או חזרו לתצוגה המלאה.</p><button class="btn btn-ghost" data-action="clear-search">נקה חיפוש</button></div>`;

function renderHome(){app.innerHTML=`
 <section class="hero royal-hero" aria-label="פתיחת פרויקט עם ישראל"><img class="hero-crest" src="ur-logo-crest.png" alt="עץ השורשים המלכותי של עם ישראל"><div class="hero-content"><div class="gold-label">בית המורשת והאחדות · מהדורת RoyalArt 0.0.3</div><h1>שורשים עמוקים.<br><span>לב אחד.</span></h1><p class="hero-sub">מסע בין דורות, מידות ומעשים טובים — בית דיגיטלי שבו כל סיפור מוסיף אור לעם ישראל.</p><div class="hero-actions"><button class="btn btn-primary royal-gold" data-view="gates">✦ כניסה לשבעת השערים</button><button class="btn btn-ghost royal-sapphire" data-view="cards">▣ בחר קלף השראה</button><button class="btn btn-ghost royal-emerald" data-view="artvault">🎨 אוצר הגרפיקה</button><a class="btn btn-download" href="UnityRoots_v0.0.3.zip" download="UnityRoots_v0.0.3.zip">⬇ הורד את כל האתר · ZIP</a></div><div class="meta-pills"><span class="pill"><b>70</b> פרקי לימוד</span><span class="pill"><b>24</b> סטיקרים שקופים</span><span class="pill"><b>22</b> נכסים גרפיים עצמאיים</span></div></div></section>
 <div class="content-pad"><div class="insight-band"><div><p class="big-quote">״הִנֵּה מַה טּוֹב וּמַה נָּעִים שֶׁבֶת אַחִים גַּם יָחַד״</p><small>תהילים קל״ג, א׳</small></div><div class="seal" aria-hidden="true">✺</div></div>
 <div class="stats"><div class="stat"><div class="stat-num">70</div><div class="stat-label">פרקים בשבעה שערים</div></div><div class="stat"><div class="stat-num">20</div><div class="stat-label">חזיתות וגבים לקלפים</div></div><div class="stat"><div class="stat-num">24</div><div class="stat-label">סטיקרים PNG שקופים</div></div><div class="stat"><div class="stat-num">100+</div><div class="stat-label">משימות ביומן הפיתוח</div></div></div>
 ${sectionHead('01 / מסע של משמעות','שבעת שערי הלב','בכל שער: פסוק, ביאור, סור מרע ועשה טוב.','gates')}
 <div class="cards-grid">${gates.slice(0,6).map(g=>`<article class="feature-card"><img class="royal-category-img" src="ur-${g.id}.png" alt="איור ${esc(g.name)}" loading="lazy"><h3>${esc(g.name)}</h3><p>${esc(g.theme)} — ${esc(g.thought)}</p><div class="bottom"><span class="chapter-count">10 פרקי עומק</span><button class="arrow-link" data-open-gate="${g.id}">פתח שער ←</button></div></article>`).join('')}</div>
 <div class="split-feature"><section class="feature-banner"><div class="kicker">02 / קלף ליום חדש</div><h3>מילה טובה. צעד ממשי.</h3><p>עשרה קלפים דו־צדדיים עם איור, מסר, מעשה טוב והורדת PNG.</p><button class="btn btn-primary" data-action="random-card">שלוף קלף אקראי ✧</button></section><section class="feature-banner is-image"><div class="kicker">03 / אוצר של סמלים</div><h3>אמנות הזיכרון</h3><p>עשרים וארבעה סטיקרים שקופים ומאוירים בנפרד להורדה.</p><button class="btn btn-ghost" data-view="gallery">לגלריה המאוירת ←</button></section></div></div>`;
}
function renderGates(){const items=gates.filter(g=>findText(g.name,g.theme,g.verse,g.thought,g.avoid,g.do));app.innerHTML=`<div class="content-pad">${header('01 / ספר המידות','שבעת שערי הלב · 70 פרקים','עשרה פרקים מלאים בכל שער: פתיחה, משל ונמשל, פרד״ס, סור מרע, עשה טוב ותרגול שבעה ימים. הפירושים והמשלים הם מקוריים.')}${items.length?`<div class="book-grid">${items.map(g=>`<article class="book-card illustrated-gate" id="gate-${g.id}"><div class="gate-art-wrap"><img class="gate-art" src="ur-${g.id}.png" alt="איור מלכותי ${esc(g.name)}" loading="lazy"></div><div class="book-index">שער ${String(gates.indexOf(g)+1).padStart(2,'0')} · ${g.emoji} · 10 פרקים</div><h3>${esc(g.name)}</h3><p class="verse-line">${esc(g.verse)}</p><p class="explain">${esc(g.thought)}</p><div class="pair"><div><strong>🚫 סור מרע</strong><span>${esc(g.avoid)}</span></div><div><strong>✅ עשה טוב</strong><span>${esc(g.do)}</span></div></div><div class="actions"><button class="btn btn-primary royal-gold" data-open-gate="${g.id}">📖 פתח את עשרת הפרקים</button></div></article>`).join('')}</div>`:noResults()}</div>`}
function openGate(id){
 const g=gates.find(x=>x.id===id),chapters=window.UR_CHAPTERS?.[id];
 if(!g||!chapters)return toast('השער אינו זמין כרגע.');
 modal(g.emoji+' '+g.name,`<p class="verse-line">${esc(g.verse)}</p><p>${esc(g.thought)}</p><p class="source-note">10 פרקים מקוריים · פתיחה, משל, נמשל, פרד״ס, מידות ותרגול</p><div class="chapter-index">${chapters.map((ch,i)=>`<button class="chapter-item" data-open-chapter="${id}" data-chapter-index="${i}"><b>${String(i+1).padStart(2,'0')}</b><span>${esc(ch[0])}</span></button>`).join('')}</div>`);
}
function openChapter(id,index){
 const gate=gates.find(x=>x.id===id),ch=window.UR_CHAPTERS?.[id]?.[index];
 if(!gate||!ch)return toast('הפרק אינו זמין כרגע.');
 const [title,teaching,parable,avoid,good,question]=ch;
 const days=[
 'יום 1 — קרא את הפרק וסמן משפט אחד שנוגע בך.',
 'יום 2 — שים לב למצב שבו המידה הזאת נדרשת.',
 'יום 3 — בצע בפועל: '+good,
 'יום 4 — שוחח עם אדם אמין על מה שלמדת.',
 'יום 5 — חזור על המעשה הטוב בלי לפרסם אותו.',
 'יום 6 — בדוק בעדינות מה היה קשה וכיצד תוכל להשתפר.',
 'יום 7 — סכם תובנה אחת והחלט על המשך קטן.'
 ];
 modal(gate.emoji+' '+title,`<article class="chapter-reader"><div class="micro-label">${esc(gate.name)} · פרק ${index+1} מתוך 10</div><blockquote>${esc(gate.verse)}</blockquote><h3>📖 פתיחת הפרק</h3><p class="chapter-lede">${esc(teaching)}</p><h3>🌿 משל</h3><p>${esc(parable)}</p><h3>🔍 נמשל</h3><p>המשל מלמד שהמידה אינה רעיון מרוחק: היא מתגלה בבחירה קטנה וביחס שלנו לאנשים ולזיכרונות. ${esc(teaching)} כאשר מתרגלים זאת בעקביות, המחשבה הופכת למעשה והמעשה להרגל מיטיב.</p><h3>💎 ארבעת רבדי פרד״ס — ביאור מקורי</h3><p><strong>פשט:</strong> ${esc(teaching)}</p><p><strong>רמז:</strong> הפרט הממשי שבמשל מסמל את הכוח של מעשה קטן לשנות יחס או הרגל.</p><p><strong>דרש:</strong> מן הסיפור אנו לומדים לבחור פעולה מתקנת: ${esc(good)}</p><p><strong>סוד — התבוננות פנימית:</strong> ${esc(question)}</p><h3>⚖️ סור מרע ועשה טוב</h3><div class="pair"><div><strong>🚫 סור מרע</strong><span>${esc(avoid)}</span></div><div><strong>✅ עשה טוב</strong><span>${esc(good)}</span></div></div><h3>🗓️ שבעה ימי תרגול</h3><ol>${days.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><h3>🙏 תפילה קצרה לתרגול</h3><p>ריבונו של עולם, תן בליבנו דעת לבחור בטוב, סבלנות ללמוד ולתקן, וכוח להפוך כוונה למעשה שיש בו כבוד, חסד ושלום.</p><h3>✍️ שאלה לכתיבה</h3><p>${esc(question)}</p><div class="actions"><button class="btn btn-ghost" data-open-gate="${id}">← לכל פרקי השער</button>${index>0?`<button class="btn btn-ghost" data-open-chapter="${id}" data-chapter-index="${index-1}">פרק קודם</button>`:''}${index<9?`<button class="btn btn-primary" data-open-chapter="${id}" data-chapter-index="${index+1}">פרק הבא ←</button>`:''}<button class="btn btn-ghost" data-vault-chapter="${id}" data-chapter-index="${index}">◈ שמור בכספת</button></div></article>`);
}
function stickerURL(n){return 's'+String(n).padStart(2,'0')+'.png'}
function cardArt(c,back){const n=cards.indexOf(c)+1;return stickerURL(back?n+12:n)}
function cardHTML(c){const saved=state.favorites.has(c.id),back=state.flipped.has(c.id),gate=gates.find(g=>g.id===c.gate);return `<article class="oracle-card ${back?'back-side':''}" data-card-id="${c.id}"><div class="oracle-inner"><div class="oracle-no">UNITYROOTS · ${esc(c.id.toUpperCase())}</div><span class="card-side-label">${back?'גב הקלף · מסר למעשה':'חזית הקלף · השראה'}</span><img class="oracle-art" src="${cardArt(c,back)}" alt="${esc(back?'סמל הגב':'סמל החזית')} של ${esc(c.title)}" loading="lazy"><h3>${esc(back?gate.name:c.title)}</h3><p class="oracle-quote">${back?esc(gate.verse):'״'+esc(c.quote)+'״'}</p><div class="oracle-practice">${back?'✅ '+esc(c.practice):'המעשה שלי: '+esc(c.practice)}</div><div class="oracle-actions"><button class="tiny-btn" data-flip="${c.id}">↻ הפוך</button><button class="tiny-btn" data-card-png="${c.id}" data-card-side="front">↓ חזית</button><button class="tiny-btn" data-card-png="${c.id}" data-card-side="back">↓ גב</button><button class="tiny-btn ${saved?'saved':''}" data-fav="${c.id}" aria-pressed="${saved}">${saved?'♥':'♡'}</button><button class="tiny-btn" data-vault-from-card="${c.id}">◈ שמור יצירה</button></div></div></article>`}
function renderCards(){const items=cards.filter(c=>(state.filter==='all'||c.gate===state.filter)&&findText(c.title,c.quote,c.practice));app.innerHTML=`<div class="content-pad">${header('02 / אוסף קלפים','קלפי ההשראה · חזית וגב','עשרה קלפים דו־צדדיים עם איורי רסטר מקוריים, טקסט עברי ממורכז והורדת PNG של כל צד.')}${filterChips([{id:'all',label:'הכול'},...gates.map(g=>({id:g.id,label:g.name.replace('שער ','')}))])}${items.length?`<div class="card-deck-grid">${items.map(cardHTML).join('')}</div>`:noResults()}</div>`}
function renderBlessings(){const items=blessings.filter(b=>findText(b.name,...b.lines));app.innerHTML=`<div class="content-pad">${header('03 / מילות אור','ברכות ותפילות','חמש ברכות מקוריות, כל אחת בת 12 שורות, בשלושה בתים של ארבע שורות. לחצו להעתקה או לשיתוף.')}${items.length?`<div class="blessing-grid">${items.map(b=>`<article class="blessing-card"><div class="blessing-top"><h3>${b.emoji} ${esc(b.name)}</h3><span class="source-note">טקסט מקורי · 12 שורות</span></div><div class="blessing-body">${[0,4,8].map(i=>`<p>${b.lines.slice(i,i+4).map(esc).join('<br>')}</p>`).join('')}</div><div class="actions"><button class="tiny-btn" data-copy="${b.id}">העתק ברכה</button><button class="tiny-btn" data-share="${b.id}">שתף ↗</button><button class="tiny-btn ${state.favorites.has(b.id)?'saved':''}" data-fav="${b.id}">${state.favorites.has(b.id)?'♥ נשמר':'♡ שמור'}</button></div></article>`).join('')}</div>`:noResults()}</div>`}
function renderHeritage(){const items=eras.filter(e=>findText(e.period,e.title,e.text));app.innerHTML=`<div class="content-pad">${header('04 / בין דורות','מפת המורשת','ציר רעיוני של תקופות ונושאים מרכזיים. זו סקירת מבוא, לא תחליף למחקר היסטורי או למקורות ראשוניים.')}${items.length?`<div class="timeline">${items.map(e=>`<article class="timeline-item"><small>${esc(e.period)}</small><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p></article>`).join('')}</div>`:noResults()}<p class="source-note">להעמקה: הספרייה הלאומית של ישראל, יד ושם, מאגרי ספרות המקרא והמשנה — קישורים במדור אודות.</p></div>`}
function renderGallery(){
 const categories=[...new Set(symbols.map(x=>x[2]))],items=symbols.filter(x=>(state.filter==='all'||x[2]===state.filter)&&findText(x[1],x[2],x[0]));
 app.innerHTML=`<div class="content-pad">${header('05 / אמנות הזיכרון','24 סטיקרים שקופים עם הילות אור','24 יצירות רסטר עצמאיות ושקופות. ההילה מאחורי כל סטיקר נגזרת מצבעי הסטיקר עצמו, בלי להכניס רקע לתוך קובץ ה־PNG.')}<div class="actions" style="margin:0 0 22px"><button class="btn btn-primary royal-gold" data-download-stickers>↓ הורד את כל 24 הסטיקרים · ZIP</button><button class="btn btn-ghost" data-view="artvault">🎨 אוצר המסגרות והלוגואים</button></div>${filterChips([{id:'all',label:'הכול'},...categories.map(c=>({id:c,label:c}))])}${items.length?`<div class="sticker-gallery">${items.map(([id,name,category])=>`<article class="sticker-tile"><div class="sticker-picture"><img class="sticker-aura" src="${id}.png" alt="" aria-hidden="true" loading="lazy"><img class="sticker-main" src="${id}.png" alt="סטיקר ${esc(name)} על רקע שקוף" loading="lazy"></div><div class="sticker-info"><h3>${esc(name)}</h3><p>${esc(category)} · PNG שקוף · AnLoMinus</p><a class="btn btn-ghost" href="${id}.png" download="UnityRoots_${id}_Transparent.png">↓ הורדת PNG</a></div></article>`).join('')}</div>`:noResults()}<p class="source-note" style="margin-top:20px">הקובץ יורד עם שקיפות אמיתית; ההילה היא אפקט תצוגה שנוצר מהצבעים של אותו סטיקר.</p></div>`;
}
function renderArtVault(){
 const artworks=window.UR_ART||[],types=['הכול',...new Set(artworks.map(a=>a.type))];
 const items=artworks.filter(a=>(state.artFilter==='all'||state.artFilter===a.type)&&findText(a.name,a.type,a.desc));
 app.innerHTML=`<div class="content-pad royal-art-page">${header('07 / RoyalArt · גלריית ההפקה','אוצר הגרפיקה המלכותית','לוגואים, אייקון אתר, איורי שבעת השערים, כפתורים, מסגרות, באנרים ורקעים. כל יצירה היא קובץ PNG נפרד בתיקיית השורש.')}
 <div class="royal-art-top"><img src="ur-logo-tree.png" alt="לוגו UnityRoots של עץ הזית ושורשי הלב"><div><span class="kicker">22 קובצי PNG מקוריים</span><h2>סמלים שנולדו מתוך השורשים</h2><p>זהב עתיק, אבני ספיר, אזמרגד וקלף מואר. אפשר להוריד כל תמונה בנפרד, או לקבל את כל האתר בקובץ אחד.</p><div class="actions"><button class="btn btn-primary royal-gold" data-download-graphics>↓ חבילת 22 התמונות · ZIP</button><a class="btn btn-ghost" href="UnityRoots_v0.0.3.zip" download>↓ אתר מלא · ZIP</a></div></div></div>
 <div class="filters" role="group" aria-label="סינון נכסים גרפיים">${types.map(t=>`<button class="chip ${state.artFilter===(t==='הכול'?'all':t)?'active':''}" data-art-filter="${esc(t==='הכול'?'all':t)}">${esc(t)}</button>`).join('')}</div>
 ${items.length?`<div class="art-gallery">${items.map(a=>`<article class="art-tile"><div class="art-preview ${a.type==='רקעים'?'is-background':''}"><img src="${a.file}" alt="${esc(a.name)}" loading="lazy"></div><div class="art-info"><span class="art-type">${esc(a.type)}</span><h3>${esc(a.name)}</h3><p>${esc(a.desc)}</p><a class="btn btn-ghost" href="${a.file}" download="${a.file}">↓ הורד PNG</a></div></article>`).join('')}</div>`:noResults()}
 <p class="source-note">האיורים הופקו עבור UnityRoots v0.0.3, בעיצוב מאוחד של לאון יעקובוב (AnLoMinus) · Cyber Shamanic. רקעים הם אטומים במכוון; סמלים, מסגרות וכפתורים שומרים על ערוץ שקיפות.</p></div>`;
}
function renderFavorites(){const savedCards=cards.filter(c=>state.favorites.has(c.id)),savedBlessings=blessings.filter(b=>state.favorites.has(b.id));app.innerHTML=`<div class="content-pad">${header('האוסף האישי','היצירות ששמרתי','המועדפים נשמרים מקומית בדפדפן זה בלבד. אפשר לייצא גיבוי בהגדרות.')}${savedCards.length?`<div class="card-deck-grid">${savedCards.map(cardHTML).join('')}</div>`:''}${savedBlessings.length?`<h2 style="margin-top:36px">ברכות שמורות</h2><div class="cards-grid">${savedBlessings.map(b=>`<article class="book-card"><h3>${esc(b.name)}</h3><p>${esc(b.lines.slice(0,3).join(' / '))}</p><button class="tiny-btn" data-view="blessings">לכל הברכות</button><button class="tiny-btn saved" data-fav="${b.id}">♥ הסר</button></article>`).join('')}</div>`:''}${!savedCards.length&&!savedBlessings.length?'<div class="empty"><strong>האוסף שלך מחכה להתמלא</strong><p>לחץ על ♡ ליד קלף או ברכה כדי לשמור כאן.</p><button class="btn btn-primary" data-view="cards">בוא לבחור קלף</button></div>':''}</div>`}
async function renderVault(){
 app.innerHTML=`<div class="content-pad">${header('06 / CreationVault','כספת היצירות','כתיבה ושמירה עצמאית בדפדפן באמצעות IndexedDB: עריכה, היסטוריית גרסאות, שחזור, חיפוש וגיבוי. אין סנכרון ענן בגרסה זו.')}<div class="vault-toolbar"><button class="btn btn-primary" data-vault-action="new">✦ יצירה חדשה</button><input id="vaultSearch" aria-label="חיפוש בכספת" type="search" placeholder="חפש בכותרת, בתוכן או בתגיות..." value="${esc(state.vaultFilter)}"><button class="btn btn-ghost" id="exportData">↓ גיבוי מלא JSON</button></div><div id="vaultEntries"><p>טוען את היצירות השמורות…</p></div></div>`;
 try{
  state.vaultEntries=await UR_Vault.list();if(state.view!=='vault')return;
  updateVaultEntries();
 }catch(e){document.getElementById('vaultEntries').innerHTML=`<div class="empty"><strong>לא ניתן לגשת לאחסון המקומי.</strong><p>בדוק שהדפדפן מאפשר IndexedDB ואינו במצב שמונע שמירה.</p></div>`}
}
function updateVaultEntries(){
 const target=document.getElementById('vaultEntries');if(!target)return;
 const q=state.vaultFilter.toLocaleLowerCase('he-IL');
 const items=state.vaultEntries.filter(x=>[x.title,x.body,x.kind,...(x.tags||[])].join(' ').toLocaleLowerCase('he-IL').includes(q));
 target.innerHTML=items.length?`<div class="vault-grid">${items.map(x=>`<article class="vault-entry"><div class="vault-meta">${esc(x.kind)} · ${new Date(x.updatedAt).toLocaleDateString('he-IL')} <span class="badge-new">${x.versions?.length??0} גרסאות קודמות</span></div><h3>${esc(x.title)}</h3><p>${esc(x.body.slice(0,250))}${x.body.length>250?'…':''}</p><div class="vault-meta">${(x.tags||[]).map(tag=>'#'+esc(tag)).join(' ')}</div><div class="actions" style="margin-top:auto"><button class="tiny-btn" data-vault-action="edit" data-vault-id="${esc(x.id)}">✎ עריכה</button><button class="tiny-btn" data-vault-action="history" data-vault-id="${esc(x.id)}">↺ גרסאות</button><button class="tiny-btn" data-vault-action="duplicate" data-vault-id="${esc(x.id)}">⊕ שכפל</button><button class="tiny-btn" data-vault-action="delete" data-vault-id="${esc(x.id)}">מחק</button></div></article>`).join('')}</div>`:`<div class="empty"><strong>${state.vaultEntries.length?'לא נמצאו יצירות התואמות לחיפוש':'הכספת שלך מחכה ליצירה הראשונה'}</strong><p>הכתיבה נשמרת במכשיר הזה בלבד, וניתן לייצא גיבוי בכל עת.</p><button class="btn btn-primary" data-vault-action="new">✦ יצירה חדשה</button></div>`;
}
async function openVaultEditor(id=null,preset=null){
 const item=id?await UR_Vault.get(id):null;
 const draft=!id&&!preset?storage.get('vault-draft',{}):{};
 const data=item||preset||draft||{};
 modal(item?'עריכת יצירה':'יצירה חדשה בכספת',`<p class="source-note">כל שמירה של יצירה קיימת יוצרת גרסה קודמת לשחזור. הטיוטה נשמרת אוטומטית בדפדפן הנוכחי.</p><form class="vault-form" id="vaultForm" data-edit-id="${esc(item?.id||'')}"><label>סוג יצירה<select name="kind"><option ${data.kind==='רשומה'?'selected':''}>רשומה</option><option ${data.kind==='קלף'?'selected':''}>קלף</option><option ${data.kind==='ברכה'?'selected':''}>ברכה</option><option ${data.kind==='תפילה'?'selected':''}>תפילה</option><option ${data.kind==='ליקוט'?'selected':''}>ליקוט</option></select></label><label>שם היצירה<input name="title" maxlength="120" required value="${esc(data.title||'')}" placeholder="לדוגמה: אור של אחדות"></label><label>התוכן שלי<textarea name="body" required maxlength="12000" rows="8" placeholder="כתוב את היצירה שלך כאן…">${esc(data.body||'')}</textarea></label><label>תגיות, מופרדות בפסיקים<input name="tags" value="${esc(Array.isArray(data.tags)?data.tags.join(', '):data.tags||'')}" placeholder="חסד, משפחה, אור"></label><div class="actions"><button class="btn btn-primary" type="submit">💾 שמור יצירה</button><button class="btn btn-ghost" type="button" data-close="modal">ביטול</button></div></form>`);
}
async function showVaultHistory(id){
 const item=await UR_Vault.get(id);if(!item)return toast('היצירה לא נמצאה.');
 const versions=item.versions||[];
 modal('היסטוריית גרסאות · '+item.title,`<p>ליצירה זו ${versions.length} גרסאות קודמות. שחזור שומר תחילה את הגרסה הנוכחית בהיסטוריה.</p>${versions.length?`<div class="vault-history">${versions.map((v,i)=>`<article class="vault-version"><h3>גרסה ${i+1} · ${esc(v.title)}</h3><p class="source-note">${new Date(v.updatedAt).toLocaleString('he-IL')}</p><p>${esc(v.body.slice(0,250))}${v.body.length>250?'…':''}</p><button class="btn btn-ghost" data-vault-action="restore" data-vault-id="${esc(id)}" data-version-index="${i}">↺ שחזר גרסה זו</button></article>`).join('')}</div>`:'<p>עדיין אין גרסאות קודמות.</p>'}`);
}
function renderSearch(){
 const g=gates.filter(x=>findText(x.name,x.theme,x.verse,x.thought,x.avoid,x.do));
 const c=cards.filter(x=>findText(x.title,x.quote,x.practice));
 const b=blessings.filter(x=>findText(x.name,...x.lines));
 const h=eras.filter(x=>findText(x.period,x.title,x.text));
 app.innerHTML=`<div class="content-pad">${header('חיפוש בספרייה','תוצאות עבור ״'+state.search+'״','החיפוש משלב שערים, קלפים, ברכות ותקופות מורשת במקום אחד.')}${g.length?`${sectionHead('שערי המידות',g.length+' שערים','תוכן ללימוד ולתרגול','gates')}<div class="book-grid">${g.map(x=>`<article class="book-card"><div class="book-index">${x.emoji} · ${esc(x.theme)}</div><h3>${esc(x.name)}</h3><p>${esc(x.thought)}</p><button class="arrow-link" data-open-gate="${x.id}">לשער המלא ←</button></article>`).join('')}</div>`:''}${c.length?`<div style="margin-top:35px">${sectionHead('קלפים',c.length+' קלפי השראה','לשמירה ולשיתוף','cards')}<div class="card-deck-grid">${c.map(cardHTML).join('')}</div></div>`:''}${b.length?`<div style="margin-top:35px">${sectionHead('ברכות',b.length+' ברכות','נוסח מקורי, 12 שורות לכל ברכה','blessings')}<div class="cards-grid">${b.map(x=>`<article class="book-card"><div class="book-index">${x.emoji} · ברכה</div><h3>${esc(x.name)}</h3><p>${esc(x.lines.slice(0,3).join(' / '))}</p><button class="arrow-link" data-view="blessings">לנוסח המלא ←</button></article>`).join('')}</div></div>`:''}${h.length?`<div style="margin-top:35px">${sectionHead('מורשת',h.length+' תקופות','מפת זמן לימודית','heritage')}<div class="cards-grid">${h.map(x=>`<article class="book-card"><div class="book-index">${esc(x.period)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div></div>`:''}${!(g.length+c.length+b.length+h.length)?noResults():''}</div>`;
}
function filterChips(items){return `<div class="filters" role="group" aria-label="סינון לפי שער">${items.map(f=>`<button class="chip ${state.filter===f.id?'active':''}" data-filter="${f.id}" aria-pressed="${state.filter===f.id}">${esc(f.label)}</button>`).join('')}</div>`}
function renderTodo(){
 const query=state.taskSearch.trim().toLocaleLowerCase('he-IL');
 const tasks=state.tasks.filter(t=>(state.listMode==='all'||(state.listMode==='done')===taskChecked(t))&&[t.name,t.group,t.id].join(' ').toLocaleLowerCase('he-IL').includes(query));
 const total=state.tasks.length,done=state.tasks.filter(taskChecked).length,groups=[...new Set(tasks.map(t=>t.group))],pct=total?Math.round(done/total*100):0;
 app.innerHTML=`<div class="content-pad">${header('06 / יומן הפיתוח','מפת הדרך של UnityRoots','יומן חי מתוך TODO.md: חיפוש מהיר, 100+ משימות לפי נושאים, סינון, אקורדיונים ומעקב אישי נשמר בדפדפן.')}
 <div class="todo-hero"><img src="ur-logo-seal.png" alt="" aria-hidden="true"><div class="todo-stats"><strong>${done} <span>/ ${total}</span></strong><p>משימות מסומנות · ${pct}%</p><div class="progress"><span style="width:${pct}%"></span></div></div><div class="todo-hero-side"><b>${groups.length}</b><small>תחומי פיתוח</small><b>0.0.3</b><small>הגרסה הנוכחית</small></div></div>
 <div class="todo-tools"><label class="todo-search">⌕ <input id="taskSearch" type="search" placeholder="חפש מספר משימה, נושא או מילת מפתח…" value="${esc(state.taskSearch)}" aria-label="חיפוש ביומן המשימות"></label><div class="filters"><button class="chip ${state.listMode==='all'?'active':''}" data-task-mode="all">הכול</button><button class="chip ${state.listMode==='done'?'active':''}" data-task-mode="done">הושלם</button><button class="chip ${state.listMode==='pending'?'active':''}" data-task-mode="pending">ממתין</button></div></div>
 <p class="todo-note">✓ סימון תיבה משפיע על המעקב האישי שלך בלבד. התיעוד הרשמי של מה שבוצע נלקח מקובץ TODO.md.</p>
 ${groups.map((group,i)=>{const list=tasks.filter(t=>t.group===group);return list.length?`<details class="task-group task-accordion" ${i<2||!!query?'open':''}><summary><span>✧ ${esc(group)}</span><span class="task-count">${list.filter(taskChecked).length}/${list.length} ✓</span></summary>${list.map(t=>`<label class="task-item ${taskChecked(t)?'checked':''}"><input type="checkbox" data-task-id="${t.id}" ${taskChecked(t)?'checked':''}><span><span class="task-id">${t.id}</span> · ${esc(t.name)}</span></label>`).join('')}</details>`:''}).join('')||noResults()}
 </div>`;
}
const taskChecked=t=>Object.prototype.hasOwnProperty.call(state.taskOverrides,t.id)?Boolean(state.taskOverrides[t.id]):t.done;
async function loadTasks(){try{const txt=await fetch('TODO.md',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('TODO');return r.text()});let group='כללי';state.tasks=txt.split(/\r?\n/).flatMap(line=>{const g=line.match(/^##\s+(.+)/);if(g){group=g[1];return []}const m=line.match(/^- \[([ xX])\]\s+(UR-\d{3})\s+[—:-]\s+(.+)/);return m?[{done:m[1].toLowerCase()==='x',id:m[2],name:m[3],group}]:[]});if(state.view==='todo')render()}catch{toast('טעינת רשימת המשימות נכשלה.');}}
async function loadMarkdown(path){const r=await fetch(path,{cache:'no-store'});if(!r.ok)throw Error(path);return r.text()}
function mdInline(s){return esc(s).replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\[(.*?)\]\((https?:\/\/[^)]+)\)/g,(_full,label,url)=>`<a href="${url.replace(/&amp;/g,'&')}" target="_blank" rel="noopener noreferrer">${label}</a>`)}
function renderMarkdown(md){const lines=md.split(/\r?\n/);let out=[],inList=false;const close=()=>{if(inList){out.push('</ul>');inList=false}};for(const l of lines){if(/^#{1,3}\s+/.test(l)){close();const h=l.match(/^(#{1,3})\s+(.+)/);out.push(`<h${h[1].length}>${mdInline(h[2])}</h${h[1].length}>`)}else if(/^[-*]\s+/.test(l)){if(!inList){out.push('<ul>');inList=true}out.push(`<li>${mdInline(l.replace(/^[-*]\s+/,''))}</li>`)}else if(/^---+$/.test(l.trim())){close();out.push('<hr>')}else if(/^>\s+/.test(l)){close();out.push(`<blockquote>${mdInline(l.replace(/^>\s+/,''))}</blockquote>`)}else if(l.trim()){close();out.push(`<p>${mdInline(l)}</p>`)}else close()}close();return out.join('')}
let previousFocus=null;
function modal(title,html){previousFocus=document.activeElement;document.getElementById('modalTitle').textContent=title;modalBody.innerHTML=html;modalLayer.hidden=false;document.querySelector('.modal').focus();document.body.style.overflow='hidden'}
function closeModal(){modalLayer.hidden=true;document.body.style.overflow='';previousFocus?.focus?.()}
async function showChangelog(){
 modal('יומן האירועים · VersionVault','<p>טוען את CHANGELOG.md…</p>');
 try{
  const md=await loadMarkdown('CHANGELOG.md'),start=md.indexOf('## גרסה '),parts=(start>=0?md.slice(start):md).split(/\n(?=## גרסה )/);
  const timeline=parts.map((part,i)=>{const title=part.match(/^##\s+([^\n]+)/m)?.[1]||'מבוא וחדשות הפצה';return `<details class="release-entry" ${i===0?'open':''}><summary><span class="release-index">${String(i+1).padStart(2,'0')}</span><span>${esc(title)}</span><span class="release-arrow">⌄</span></summary><div class="markdown release-content">${renderMarkdown(part)}</div></details>`}).join('');
  modalBody.innerHTML=`<div class="changelog-hero"><img src="ur-logo-modern.png" alt="" aria-hidden="true"><div><span class="kicker">VersionVault · יומן חי</span><h3>מה נוצר, מה שופר ומה בדרך?</h3><p>התוכן נטען מקובץ <code>CHANGELOG.md</code> שבתיקיית השורש ומתעדכן בכל גרסה.</p></div></div><div class="release-summary"><span>✦ גרסה 0.0.3</span><span>🎨 22 נכסי RoyalArt</span><span>📖 70 פרקים</span><span>🃏 24 סטיקרים</span></div><div class="release-timeline">${timeline}</div><div class="actions"><button class="btn btn-primary" data-view="todo">☑ הצג את יומן המשימות</button><a class="btn btn-ghost" href="CHANGELOG.md" download="CHANGELOG.md">↓ הורד את היומן</a></div>`;
 }catch{modalBody.textContent='לא ניתן לקרוא את יומן הגרסאות כעת.'}
}
function showAbout(){
 modal('אודות · UnityRoots RoyalArt',`<section class="about-cover"><img class="about-crest" src="ur-logo-crest.png" alt="עץ השורשים של UnityRoots"><div><span class="kicker">עם ישראל · UnityRoots</span><h2>שורשים רבים. לב אחד.</h2><p>בית דיגיטלי לחיבור בין מורשת, מידות, תפילות, קלפים ויצירה. פרויקט מלכותי בעברית מלאה, פתוח להתרחבות.</p><span class="about-edition">✦ RoyalArt · גרסה 0.0.3</span></div></section>
 <div class="about-kpis"><div><b>7</b><span>שערים</span></div><div><b>70</b><span>פרקים</span></div><div><b>24</b><span>סטיקרים</span></div><div><b>22</b><span>נכסים</span></div></div>
 <section class="about-section"><h3>👑 יוצר ומנהל הפרויקט</h3><p><strong>לאון יעקובוב (AnLoMinus)</strong><br>Cyber Shamanic · תכנון, כתיבה, פיתוח ואוצרות גרפית</p><div class="about-social"><a href="https://github.com/AnLoMinus?tab=repositories" target="_blank" rel="noopener noreferrer">⌘ GitHub · מאגרים</a><a href="https://github.com/Anlominus" target="_blank" rel="noopener noreferrer">⌘ GitHub · פרופיל</a><a href="https://www.linkedin.com/in/anlominus/" target="_blank" rel="noopener noreferrer">◈ LinkedIn</a><a href="https://www.facebook.com/AnlominusX" target="_blank" rel="noopener noreferrer">◈ Facebook</a><a href="https://codepen.io/Anlominus" target="_blank" rel="noopener noreferrer">◇ CodePen</a></div></section>
 <section class="about-section"><h3>💬 יצירת קשר ישירה</h3><div class="about-contact"><a href="https://wa.me/972543285967" target="_blank" rel="noopener noreferrer">🟢 WhatsApp · 054-328-5967</a><a href="https://wa.me/972535366687" target="_blank" rel="noopener noreferrer">🟢 WhatsApp · 053-536-6687</a><a href="mailto:GlobalElite8200@gmail.com">✉ GlobalElite8200@gmail.com</a><a href="mailto:cybershamanic@gmail.com">✉ cybershamanic@gmail.com</a></div></section>
 <section class="about-section"><h3>📚 מקורות והעמקה</h3><div class="about-social"><a href="https://www.sefaria.org/Psalms.133.1?lang=he" target="_blank" rel="noopener noreferrer">תהילים קל״ג</a><a href="https://www.sefaria.org/Pirkei_Avot.1.17?lang=he" target="_blank" rel="noopener noreferrer">פרקי אבות</a><a href="https://www.nli.org.il/" target="_blank" rel="noopener noreferrer">הספרייה הלאומית</a><a href="https://www.yadvashem.org/he.html" target="_blank" rel="noopener noreferrer">יד ושם</a></div><p class="source-note">האיורים נוצרו עבור המיזם. הטקסטים המקוריים אינם ייחוס למקורות עתיקים; פסוקים מלווים במראה מקום.</p></section>
 <div class="about-end"><p>״הִנֵּה מַה טּוֹב וּמַה נָּעִים שֶׁבֶת אַחִים גַּם יָחַד״</p><small>תהילים קל״ג, א׳</small></div><div class="actions"><button class="btn btn-primary royal-gold" data-view="artvault">🎨 אוצר הגרפיקה</button><button class="btn btn-ghost" data-view="todo">☑ מפת הפיתוח</button></div>`);
}
function saveSettings(){storage.set('settings',state.settings);applySettings()}
function applySettings(){document.documentElement.style.setProperty('--large',String(Math.min(1.5,Math.max(.9,Number(state.settings.scale)||1))));document.body.classList.toggle('contrast',!!state.settings.contrast);document.body.classList.toggle('no-motion',!!state.settings.motion);document.documentElement.style.setProperty('--font',state.settings.serif?"'UR Serif',Georgia,serif":"'UR Sans',Arial,sans-serif")}
function showSettings(){modal('הגדרות קריאות ונגישות',`<p>העדפות התצוגה נשמרות רק בדפדפן שלך.</p><div class="setting"><span>גודל טקסט כללי</span><input id="settingScale" type="range" min=".9" max="1.5" step=".05" value="${esc(state.settings.scale)}" aria-label="גודל טקסט"><b id="scaleValue">${Math.round(state.settings.scale*100)}%</b></div><label class="setting"><span>ניגודיות גבוהה</span><input id="settingContrast" type="checkbox" ${state.settings.contrast?'checked':''}></label><label class="setting"><span>צמצום תנועה ואנימציה</span><input id="settingMotion" type="checkbox" ${state.settings.motion?'checked':''}></label><label class="setting"><span>גופן ספרי לכותרות וטקסט</span><input id="settingSerif" type="checkbox" ${state.settings.serif?'checked':''}></label><h3>גיבוי היצירות וההעדפות</h3><p class="source-note">כולל כספת יצירות וגרסאות, מועדפים, העדפות וסימוני משימות. המידע נשאר במכשיר; לא נשמר בענן.</p><div class="actions"><button class="btn btn-primary" id="exportData">↓ ייצוא JSON</button><label class="btn btn-ghost">↑ ייבוא JSON <input id="importData" type="file" accept="application/json,.json" hidden></label><button class="btn btn-ghost" id="clearFavorites">נקה מועדפים</button></div>`)}
async function exportData(){
 try{
  const creations=await UR_Vault.list();
  const data={app:'UnityRoots',version:'0.0.3',exportedAt:new Date().toISOString(),favorites:[...state.favorites],settings:state.settings,tasks:state.taskOverrides,creations};
  const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
  a.href=url;a.download='UnityRoots_FullBackup_v0.0.3.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  toast('גיבוי מלא הוכן: כולל יצירות, גרסאות, מועדפים והעדפות.');
 }catch{toast('לא ניתן לייצא את הכספת. בדוק הרשאות אחסון בדפדפן.')}
}
async function importData(file){
 if(!file||file.size>8000000){toast('קובץ הגיבוי גדול מדי או לא נבחר.');return}
 try{
  const d=JSON.parse(await file.text());
  if(d.app!=='UnityRoots'||!Array.isArray(d.favorites)||!d.settings||!d.tasks)throw Error('format');
  state.favorites=new Set(d.favorites.filter(x=>typeof x==='string'&&(cards.some(c=>c.id===x)||blessings.some(b=>b.id===x))));
  state.settings={...state.settings,...Object.fromEntries(Object.entries(d.settings).filter(([k])=>['scale','contrast','motion','serif'].includes(k)))};
  state.taskOverrides=Object.fromEntries(Object.entries(d.tasks).filter(([k,v])=>/^UR-\d{3}$/.test(k)&&typeof v==='boolean'));
  const added=d.creations?await UR_Vault.importRecords(d.creations):0;
  storage.set('favorites',[...state.favorites]);storage.set('settings',state.settings);storage.set('tasks',state.taskOverrides);applySettings();showSettings();render();
  toast('הגיבוי נטען; '+added+' יצירות חדשות נוספו לכספת ללא דריסת קיימות.');
 }catch{toast('גיבוי לא תקין או שלא ניתן היה לשמור אותו.')}
}
function plainItem(id){const c=cards.find(x=>x.id===id);if(c)return `${c.title}\n${c.quote}\nמעשה: ${c.practice}\n— UnityRoots / Cyber Shamanic`;const b=blessings.find(x=>x.id===id);if(b)return `${b.name}\n${b.lines.join('\n')}\n— UnityRoots / Cyber Shamanic`;return ''}
async function share(id){const txt=plainItem(id);if(!txt)return;try{if(navigator.share)await navigator.share({title:'UnityRoots',text:txt});else if(navigator.clipboard){await navigator.clipboard.writeText(txt);toast('הטקסט הועתק לשיתוף.')}else{fallbackCopy(txt)}}catch(e){if(e.name!=='AbortError')fallbackCopy(txt)}}
function fallbackCopy(s){const t=document.createElement('textarea');t.value=s;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();toast('הטקסט הועתק.')}
function canvasLines(ctx,text,maxWidth){const parts=String(text).split(/\s+/),lines=[];let line='';for(const part of parts){const candidate=line?line+' '+part:part;if(ctx.measureText(candidate).width>maxWidth&&line){lines.push(line);line=part}else line=candidate}if(line)lines.push(line);return lines}
async function downloadCard(c,side){
 const back=side==='back',gate=gates.find(g=>g.id===c.gate),canvas=document.createElement('canvas');canvas.width=1024;canvas.height=1536;
 const ctx=canvas.getContext('2d');if(!ctx){toast('לא ניתן ליצור תמונה בדפדפן זה.');return}
 await document.fonts.load('900 66px "UR Serif"');await document.fonts.ready;
 const gradient=ctx.createLinearGradient(0,0,1024,1536);
 if(back){gradient.addColorStop(0,'#4b443d');gradient.addColorStop(.45,'#17283d');gradient.addColorStop(1,'#081326')}
 else{gradient.addColorStop(0,'#274b61');gradient.addColorStop(.45,'#182941');gradient.addColorStop(1,'#0c172c')}
 ctx.fillStyle=gradient;ctx.fillRect(0,0,1024,1536);
 ctx.strokeStyle='#dab778';ctx.lineWidth=8;ctx.strokeRect(42,42,940,1452);ctx.lineWidth=2;ctx.strokeRect(61,61,902,1414);
 ctx.direction='rtl';ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillStyle='#f5d79f';ctx.font='900 33px "UR Sans"';ctx.fillText('✦  U N I T Y R O O T S  ✦',512,114);
 ctx.font='900 25px "UR Sans"';ctx.fillText(back?'גב הקלף · המעשה הטוב':'חזית הקלף · השראה',512,176);
 const img=new Image();img.src=cardArt(c,back);
 try{await img.decode()}catch{toast('לא ניתן לטעון את איור הקלף.');return}
 const scale=Math.min(685/img.naturalWidth,630/img.naturalHeight),w=img.naturalWidth*scale,h=img.naturalHeight*scale;
 ctx.shadowColor='#00000088';ctx.shadowBlur=30;ctx.drawImage(img,512-w/2,235+(650-h)/2,w,h);ctx.shadowBlur=0;
 ctx.fillStyle='#f8e8c6';ctx.font='900 68px "UR Serif"';ctx.fillText(back?gate.name:c.title,512,940);
 ctx.fillStyle='#f5e9dc';ctx.font='900 42px "UR Serif"';
 const quote=back?gate.verse:'״'+c.quote+'״',lines=canvasLines(ctx,quote,820).slice(0,5);
 lines.forEach((line,i)=>ctx.fillText(line,512,1045+i*62));
 const practiceY=Math.max(1300,1060+lines.length*62);
 ctx.fillStyle='#a3e1c9';ctx.font='900 29px "UR Sans"';
 canvasLines(ctx,'✅ '+c.practice,850).slice(0,3).forEach((line,i)=>ctx.fillText(line,512,practiceY+i*42));
 ctx.fillStyle='#ebce9e';ctx.font='900 23px "UR Sans"';ctx.fillText('לאון יעקובוב · AnLoMinus · Cyber Shamanic',512,1460);
 canvas.toBlob(blob=>{if(!blob){toast('לא ניתן לייצא את הקלף.');return}const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='UnityRoots_'+c.id+'_'+side+'_v0.0.3.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('קלף '+(back?'גב':'חזית')+' נשמר כ־PNG.')},'image/png');
}
async function handleVaultAction(action,id,index){
 try{
  if(action==='new'){await openVaultEditor();return}
  if(action==='edit'){await openVaultEditor(id);return}
  if(action==='history'){await showVaultHistory(id);return}
  if(action==='duplicate'){const item=await UR_Vault.get(id);if(!item)return;await UR_Vault.save({title:item.title+' — עותק',body:item.body,kind:item.kind,tags:item.tags});toast('נוצר עותק חדש.');renderVault();return}
  if(action==='delete'){const item=await UR_Vault.get(id);if(item&&confirm('למחוק את היצירה ״'+item.title+'״ מהמכשיר הזה? לא ניתן לשחזר ללא גיבוי.')){await UR_Vault.remove(id);toast('היצירה נמחקה מהמכשיר.');renderVault()}return}
  if(action==='restore'){if(confirm('לשחזר גרסה קודמת? הגרסה הנוכחית תישמר בהיסטוריה.')){await UR_Vault.restore(id,Number(index));toast('הגרסה שוחזרה.');closeModal();go('vault')}return}
 }catch(e){toast('הפעולה נכשלה: '+e.message)}
}
// Delegated v0.0.3 actions keep existing cards and vault controls compatible.
document.addEventListener('click',async e=>{
 const el=e.target.closest('[data-open-gate],[data-open-chapter],[data-flip],[data-card-png],[data-vault-action],[data-vault-from-card],[data-vault-chapter],[data-download-stickers]');
 if(!el)return;
 e.preventDefault();e.stopImmediatePropagation();
 if(el.hasAttribute('data-download-stickers')){
  el.disabled=true;el.textContent='מכין חבילת ZIP…';
  try{await UR_Zip.download(symbols.map(([id])=>({url:''+id+'.png',name:'UnityRoots_'+id+'.png'})),'UnityRoots_24_Stickers_v0.0.3.zip',(i,n)=>{if(i%6===0)toast('מכין חבילה: '+i+' מתוך '+n)});toast('חבילת 24 הסטיקרים מוכנה להורדה.')}
  catch(err){toast('הכנת ZIP נכשלה: '+err.message)}
  finally{el.disabled=false;el.textContent='↓ הורד את כל 24 הסטיקרים · ZIP'}
  return;
 }
 if(el.dataset.openGate){openGate(el.dataset.openGate);return}
 if(el.dataset.openChapter){openChapter(el.dataset.openChapter,Number(el.dataset.chapterIndex));return}
 if(el.dataset.flip){const id=el.dataset.flip;state.flipped.has(id)?state.flipped.delete(id):state.flipped.add(id);const c=cards.find(x=>x.id===id);if(!modalLayer.hidden)modalBody.innerHTML=`<div style="max-width:350px;margin:auto">${cardHTML(c)}</div>`;else render();return}
 if(el.dataset.cardPng){const c=cards.find(x=>x.id===el.dataset.cardPng);if(c)await downloadCard(c,el.dataset.cardSide);return}
 if(el.dataset.vaultAction){await handleVaultAction(el.dataset.vaultAction,el.dataset.vaultId,el.dataset.versionIndex);return}
 if(el.dataset.vaultFromCard){const c=cards.find(x=>x.id===el.dataset.vaultFromCard);if(c)await openVaultEditor(null,{kind:'קלף',title:c.title,body:c.quote+'\\nהמעשה שלי: '+c.practice,tags:[gates.find(g=>g.id===c.gate).name]});return}
 if(el.dataset.vaultChapter){const ch=window.UR_CHAPTERS?.[el.dataset.vaultChapter]?.[Number(el.dataset.chapterIndex)];if(ch)await openVaultEditor(null,{kind:'ליקוט',title:ch[0],body:ch[1]+'\\nמשל: '+ch[2]+'\\nסור מרע: '+ch[3]+'\\nעשה טוב: '+ch[4],tags:[gates.find(g=>g.id===el.dataset.vaultChapter).name]});return}
},true);
// RoyalArt v0.0.3: individually downloadable originals and accessible modal navigation.
document.addEventListener('click',async e=>{
 const artDownload=e.target.closest('[data-download-graphics]');
 if(artDownload){
  e.preventDefault();e.stopImmediatePropagation();
  artDownload.disabled=true;artDownload.textContent='מכין אוצר גרפי…';
  try{await UR_Zip.download((window.UR_ART||[]).map(a=>({url:a.file,name:a.file})),'UnityRoots_RoyalArt_22_v0.0.3.zip',(i,n)=>{if(i%5===0)toast(`מכין קבצי אמנות: ${i}/${n}`)});toast('22 קובצי הגרפיקה נארזו בהצלחה.')}
  catch(err){toast('ההורדה נכשלה: '+err.message)}
  finally{artDownload.disabled=false;artDownload.textContent='↓ חבילת 22 התמונות · ZIP'}
  return;
 }
 const artFilter=e.target.closest('[data-art-filter]');
 if(artFilter){e.preventDefault();e.stopImmediatePropagation();state.artFilter=artFilter.dataset.artFilter;renderArtVault();return}
 const modalRoute=e.target.closest('#modalLayer [data-view]');
 if(modalRoute){e.preventDefault();e.stopImmediatePropagation();const dest=modalRoute.dataset.view;closeModal();go(dest)}
},true);
document.addEventListener('submit',async e=>{
 if(e.target.id!=='vaultForm')return;e.preventDefault();
 const form=e.target,fd=new FormData(form),id=form.dataset.editId||null;
 const payload={id,kind:fd.get('kind'),title:fd.get('title'),body:fd.get('body'),tags:fd.get('tags')};
 try{await UR_Vault.save(payload);storage.set('vault-draft',{});closeModal();go('vault');toast('היצירה נשמרה בכספת האישית.')}
 catch(err){toast('לא ניתן לשמור: '+err.message)}
});
document.addEventListener('input',e=>{
 if(e.target.id==='vaultSearch'){state.vaultFilter=e.target.value;updateVaultEntries()}
 if(e.target.id==='taskSearch'){
  const selection=e.target.selectionStart,search=e.target.value;
  state.taskSearch=search;renderTodo();
  const input=document.getElementById('taskSearch');input?.focus();input?.setSelectionRange(selection,selection);
 }
 const form=e.target.closest('#vaultForm');if(form){const fd=new FormData(form);storage.set('vault-draft',{kind:fd.get('kind'),title:fd.get('title'),body:fd.get('body'),tags:fd.get('tags')})}
});
document.addEventListener('click',async e=>{const el=e.target.closest('button,a');if(!el)return;if(el.dataset.close){closeModal();return}if(el.dataset.view){e.preventDefault();go(el.dataset.view);return}if(el.dataset.fav){const id=el.dataset.fav;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);storage.set('favorites',[...state.favorites]);render();toast(state.favorites.has(id)?'נשמר באוסף האישי ♥':'הוסר מהאוסף.');return}if(el.dataset.filter){state.filter=el.dataset.filter;render();return}if(el.dataset.share){share(el.dataset.share);return}if(el.dataset.copy){const txt=plainItem(el.dataset.copy);try{await navigator.clipboard.writeText(txt);toast('הברכה הועתקה.')}catch{fallbackCopy(txt)}return}if(el.dataset.openGate){openGate(el.dataset.openGate);return}if(el.dataset.taskMode){state.listMode=el.dataset.taskMode;renderTodo();return}if(el.dataset.action==='clear-search'){state.search='';document.getElementById('globalSearch').value='';render();return}if(el.dataset.action==='random-card'){const c=cards[Math.floor(Math.random()*cards.length)];modal('קלף היום · '+c.title,`<div style="max-width:350px;margin:auto">${cardHTML(c)}</div>`);return}if(el.id==='exportData'){exportData();return}if(el.id==='clearFavorites'){if(confirm('לנקות את כל המועדפים במכשיר זה?')){state.favorites.clear();storage.set('favorites',[]);toast('המועדפים נוקו.');showSettings();render()}return}});
document.addEventListener('change',e=>{const el=e.target;if(el.dataset.taskId){state.taskOverrides[el.dataset.taskId]=el.checked;storage.set('tasks',state.taskOverrides);renderTodo()}if(el.id==='settingContrast'){state.settings.contrast=el.checked;saveSettings()}if(el.id==='settingMotion'){state.settings.motion=el.checked;saveSettings()}if(el.id==='settingSerif'){state.settings.serif=el.checked;saveSettings()}if(el.id==='importData')importData(el.files?.[0])});
document.addEventListener('input',e=>{if(e.target.id==='settingScale'){state.settings.scale=Number(e.target.value);document.getElementById('scaleValue').textContent=Math.round(state.settings.scale*100)+'%';saveSettings()}});
document.getElementById('globalSearch').addEventListener('input',e=>{const query=e.target.value;state.search=query;if(!query.trim()){go('home');return}if(state.view!=='search'){state.view='search';document.querySelectorAll('.nav-item').forEach(btn=>{btn.classList.remove('active');btn.removeAttribute('aria-current')});location.hash='search'}render()});
document.getElementById('menuBtn').addEventListener('click',()=>{const s=document.getElementById('sidebar');s.classList.toggle('open');document.getElementById('menuBtn').setAttribute('aria-expanded',s.classList.contains('open'))});
document.getElementById('versionBtn').addEventListener('click',showChangelog);
document.getElementById('aboutBtn').addEventListener('click',showAbout);
document.getElementById('aboutAvatar').addEventListener('click',showAbout);
document.getElementById('settingsBtn').addEventListener('click',showSettings);
document.getElementById('favoritesBtn').addEventListener('click',()=>go('favorites'));
modalLayer.addEventListener('click',e=>{if(e.target.dataset.close==='modal')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();document.getElementById('sidebar').classList.remove('open')}if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&modalLayer.hidden){e.preventDefault();document.getElementById('globalSearch').focus()}if(e.key==='Tab'&&!modalLayer.hidden){const focusables=[...document.querySelectorAll('#modalLayer button,#modalLayer a,#modalLayer input')].filter(x=>!x.disabled&&x.offsetParent!==null);if(!focusables.length)return;const first=focusables[0],last=focusables.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
function clock(){document.getElementById('footerClock').textContent=new Intl.DateTimeFormat('he-IL',{timeZone:'Asia/Jerusalem',dateStyle:'medium',timeStyle:'short'}).format(new Date())+' · ישראל'}
applySettings();clock();setInterval(clock,60000);loadTasks();const initial=location.hash.slice(1);if(['gates','cards','blessings','heritage','gallery','artvault','todo','favorites','vault'].includes(initial))go(initial);else render();window.addEventListener('hashchange',()=>{const name=location.hash.slice(1)||'home';if(name!==state.view&&['home','gates','cards','blessings','heritage','gallery','artvault','todo','favorites','vault'].includes(name))go(name)});
