// UnityRoots build: root files are canonical, dist/ is only the hosted artifact.
import {mkdir,copyFile,readdir,stat,rm} from 'node:fs/promises';
import {join,resolve} from 'node:path';
const root=resolve(import.meta.dirname);
const target=join(root,'dist');
// No nested assets directory: all website files, including images and fonts,
// are authored and served from the root as explicitly requested.
const webFiles=['index.html','styles.css','app.js','royal-art.js','chapters.js','vault.js','zip.js','CHANGELOG.md','TODO.md','PROJECT_SUMMARY.md','README.md'];
for(const entry of await readdir(root,{withFileTypes:true})){
  if(entry.isFile()&&/\.(png|ttf|zip)$/i.test(entry.name))webFiles.push(entry.name);
}
for(const file of webFiles){
  const p=join(root,file);
  try{if((await stat(p)).isFile())await copyFile(p,join(target,file));}catch(err){if(err.code!=='ENOENT')throw err;}
}
// Remove the old *generated deployment copy* of nested assets, if present.
await rm(join(target,'assets'),{recursive:true,force:true});
console.log('UnityRoots root -> dist synchronized.');
