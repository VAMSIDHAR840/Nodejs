let fs=require('fs')


//existsSync

// if(fs.existsSync('./index.txt')){
//     console.log("is There");
// }
// else{
//     console.log("No");
// }

//mkdir

// if(!fs.existsSync('./abc')){
//     fs.mkdir('./abc',()=>{
//         console.log("Folder Created");
//     })
// }
// else{
//     console.log("allready folder there");
// }


//rmdir

// if(fs.existsSync('./abc')){
//     fs.rmdir('./abc',()=>{
//         console.log("Deleted");
//     })
// }
// else{
//     console.log("Folder is not there");
// }


//unlink

// if(fs.existsSync('./abc.js')){
//     fs.unlink('./abc.js',()=>{
//         console.log("unlink");
//     })
// }
// else{
//     console.log("file is Not there");
// }



//readFile and appendFile

// fs.readFile('./index.html','utf-8',(err,data)=>{
//     if(data.length!=0){
//         fs.appendFile('./index1.txt',`${data} ${new Date()}`,()=>{
//             console.log("Written");
//         })
//     }
// })



//readFile and writeFile

// fs.readFile('./index.html','utf-8',(err,data)=>{
// fs.writeFile('./index.txt',`${new Date() } \n\n ${data}`,()=>{
//     console.log("Written");
// })
// })