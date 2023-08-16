const http=require('http')
const fs=require('fs')
const PORT=8000


let server=http.createServer((req,res)=>{

    let path='./Routing/pages/'
switch (req.url) {
    case "/":path+='index.html'
        break;
        case '/about':path+='about.html'
        break;

    default:path+='404.html'
        break;
}

fs.readFile(path,(err,data)=>{
    res.write(data)
    res.end()
})

})

server.listen((PORT,()=>{
    console.log(`server running on ${PORT}`);
}))