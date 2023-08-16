const { createServer } = require("http");

let data=`<h1>Responce from Server</h1>`
let server=createServer((req,res)=>{
  res.write(data)
    res.end()
})

server.listen('3000',()=>{
    console.log("Server running");
})