const {readFileSync,writeFileSync, readFile, writeFile}=require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./content/resulttfile.txt',`${first},\n ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
                
            }
            console.log('done');
        });

    })

})










// writeFile('./content/newFile.txt','how are you',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('done');
// })

