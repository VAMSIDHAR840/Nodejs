let http=require('http')
let fs=require('fs')

let server=http.createServer((req,res)=>{
   fs.readFile('./teslaa.html','utf-8',(err,data)=>{
    res.write(data)
    res.end()
   })
})

server.listen(3000,()=>{
    console.log("server running at port 3000");
})










// let server=http.createServer((req,res)=>{
//     console.log("Responce from server");
//     // res.write("Responce from the server")
//     res.write("<div>Responce from the server</div>")
//     res.end( )
// })

// server.listen(3000,()=>{
//     console.log("server running at port 3000");
// })