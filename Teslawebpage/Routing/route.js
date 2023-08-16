let http=require('http')
let fs=require('fs')
let PORT=8000

let server=http.createServer((req,res)=>{
    let path='./NODE_830/Teslawebpage/pages/';
    switch (req.url) {
        case '/':path+='home.html'
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

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})