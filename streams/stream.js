let fs=require('fs')

let read=fs.createReadStream('./stream.txt')
let write=fs.createWriteStream('./write.txt')

read.addListener('data',(data)=>{
    write.write(`\n\n------------------------\n\n ${new Date()} \n\n`)
    write.write(data)
    write.write(`\n\n------------------------\n\n ${new Date()} \n\n`)
    console.log(new Date());
})