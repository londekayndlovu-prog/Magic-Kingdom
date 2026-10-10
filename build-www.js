// Copies the game files into www/ for Capacitor (Android packaging).
const fs=require('fs'),path=require('path');
const items=['index.html','sw.js','offline.html','manifest.webmanifest','css','js','icons','assets'];
fs.rmSync('www',{recursive:true,force:true});fs.mkdirSync('www');
for(const i of items){if(fs.existsSync(i))fs.cpSync(i,path.join('www',i),{recursive:true})}
console.log('www/ ready');
