const path=require('path');
const a=path.sep;
console.log(a);

const filepath=path.join('./content','testfolder','text.txt');
console.log(filepath);

const baseName=path.basename(filepath);
console.log(baseName);

const absolute=path.resolve(__dirname,filepath);
console.log(absolute);