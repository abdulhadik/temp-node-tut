const { readFileSync,writeFileSync, write }=require('fs');
console.log("start")
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

// console.log(first);
// console.log(second);

writeFileSync('./content/create-newfile.txt',`here is the  writed ones\n ${second},\n ${first}`,{flag:'a'});

console.log("done with this task ");
console.log("starting next one");



 
