let readline = require('readline')
let fs = require('fs');
let http = require('http')
let url = require('url')
let replacehtml = require('./Modules/replaceHtml')

//custom modules


// console.log("Hello world");
// console.log("This is my first program");

//input from the user

// let ul=readline.createInterface({
// input:process.stdin,
// output:process.stdout
// });
// ul.question('please enter your name : ',(name)=>{
//     console.log(`Your name is : ${name}`);
//     ul.close();
// })
// ul.on('close',()=>{
//     console.log("Interface closed");
//     process.exit(0);
// })


//Synchronous code 

// let data=fs.readFileSync('./Files/input.txt','utf-8')
// console.log(data);
// let content=`Your data is ${data} \n Right now time is ${new Date()}`
// fs.writeFileSync('./Files/output.txt',content)
// console.log("Reading File");

//Asynchronous Code

// let xyz=fs.readFile('./Files/input.txt','utf-8',(err,data)=>{
//     console.log(data);
// })
// console.log("Reading File");


//Callback Help

// fs.readFile('./Files/start.txt','utf-8',(err,data1)=>{
//     console.log(data1);
//     fs.readFile(`./Files/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile('./Files/append.txt','utf-8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile('./Files/write.txt',`${data1}\n\n${data2}\n\n ${data3} \n\n ${new Date()} `,()=>{
//                 console.log("Written successfully");
//             })
//         })
//     })
// })
// console.log("Reading file........Vamsidhar Reddy Placed");




//creating a web server

// Step 1 : Create a Server

// let server=http.createServer((res,req)=>{
//     req.end('this is h1 element  ');
//     console.log("A new Request received");
// })
// // Step 2 : Start the Server
// server.listen(8000,'127.0.0.1',()=>{
//     console.log("Server has started");
// })

// let data=fs.readFileSync('./Template/index.html','utf-8')  //this is html file
// let server=http.createServer((req,res)=>{
//     res.end(data)// read the html data
//     console.log("A server is created");
// })
// server.listen('8000','127.0.0.1',()=>{
//     console.log("Server Connected");
// })



// let server=http.createServer((req,res)=>{
//     let path=req.url;
//     if(path==='/'||path.toLocaleLowerCase()==='/home')
//     {
//         res.end("You are in Home Page")
//     }
//     else if(path.toLocaleLowerCase()==='/about')
//     {
//         res.end('You are in about page')
//     }
//     else if(path.toLocaleLowerCase()==='/contact')
//     {
//         res.end("You are in contact page")
//     }
//     else {
//         res.end('Error 404 : Page not Found')
//     }
// })

// server.listen('8000','127.0.0.1',()=>{
//     console.log("Server has Connected");
// })


//13 Sending Html responce


// let data = fs.readFileSync('./Template/index.html', 'utf-8')
// let server = http.createServer((req, res) => {
//   let path = req.url;
//   if (path === '/' || path.toLocaleLowerCase() === "/home")
//     res.end(data.replace('{{%CONTENT%}}', 'You are in home page'))
//   else if (path.toLocaleLowerCase() === '/about')
//     res.end(data.replace('{{%CONTENT%}}', 'You are in about page'))
//   else if (path.toLocaleLowerCase() === '/contact') {
//     res.end(data.replace('{{%CONTENT%}}', "You are in Contact Page"))
//   }
//   else if (path.toLocaleLowerCase() === '/products') {
//     res.end(data.replace('{{%CONTENT%}}', "You are in Products page"))
//   }
//   else {
//     res.end(data.replace('{{%CONTENT%}}', 'Errot 404 , page not Found'))
//   }
// })
// let port = 8000
// server.listen(port, 'localhost', () => {
//   console.log("Server has Connected " + port);
// })



// 14 Setting Headers for Responce

// let data = fs.readFileSync('./Template/index.html', 'utf-8')
// let server = http.createServer((req, res) => {
//   let path = req.url;
//   if (path === '/' || path.toLocaleLowerCase() === "/home") {
//     res.end(data.replace('{{%CONTENT%}}', 'You are in home page'))
//   }
//   else if (path.toLocaleLowerCase() === '/about') {
//     res.end(data.replace('{{%CONTENT%}}', 'You are in about page'))
//   }
//   else if (path.toLocaleLowerCase() === '/contact') {
//     res.end(data.replace('{{%CONTENT%}}', 'You are in Contact Page'))
//   }
//   else if (path.toLocaleLowerCase() === '/products') {
//     res.end(data.replace('{{%CONTENT%}}', 'You are in Products Page'))
//   }
//   else {
//     res.end(data.replace('{{%CONTENT%}}', 'Error 404 , page not Found'))
//   }
// })
// let port = 8000
// server.listen(port, 'localhost', () => {
//   console.log("Server has Connected " + port);
// })




//15 Working with JSON data


// let html = fs.readFileSync('./Template/index.html', 'utf-8')
// let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))
// let server = http.createServer((req, res) => {
//   let path = req.url;
//   if (path === '/' || path.toLocaleLowerCase() === "/home") {
//     res.end(html.replace('{{%CONTENT%}}', 'You are in home page'))
//   }
//   else if (path.toLocaleLowerCase() === '/about') {
//     res.end(html.replace('{{%CONTENT%}}', 'You are in about page'))
//   }
//   else if (path.toLocaleLowerCase() === '/contact') {
//     res.end(html.replace('{{%CONTENT%}}', "You are in Contact Page"))
//   }
//   else if (path.toLocaleLowerCase() === '/products') {
//     res.end(html.replace('{{%CONTENT%}}','You are in Product page'));
//     console.log(products);
//   }
//   else {
//     res.end(html.replace('{{%CONTENT%}}', 'Error 404 , page not Found'))
//   }
// })
// let port = 8000
// server.listen(port, 'localhost', () => {
//   console.log("Server has Connected " + port);
// })


//16 Transforming json data into html

// let html = fs.readFileSync('./Template/index.html', 'utf-8')
// let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))
// let product_list = fs.readFileSync('./Template/product-list.html', 'utf-8')

// let productHtmlArray = products.map((prod) => {
//   let output = product_list.replace('{{%Image%}}', prod.ProductImage)
//   output = output.replace('{{%NAME%}}', prod.name)
//   output = output.replace('{{%ModelName%}}', prod.ModelName)
//   output = output.replace('{{%ModelNumber%}}', prod.ModelNumber)
//   output = output.replace('{{%Size%}}', prod.Size)
//   output = output.replace('{{%Camera%}}', prod.Camera)
//   output = output.replace('{{%Price%}}', prod.Price)
//   output = output.replace('{{%color%}}', prod.color)

//   return output;
// })


// let server = http.createServer((req, res) => {
//   let path = req.url;
//   if (path === '/' || path.toLocaleLowerCase() === "/home") {
//     res.writeHead(200, {
//       'Content-type': 'text/html',
//       'My-Header': "Vamsidhar Reddy"
//     })
//     res.end(html.replace('{{%CONTENT%}}', 'You are in home page'))
//   }
//   else if (path.toLocaleLowerCase() === '/about') {
//     res.writeHead(200, {
//       'Content-type': 'text/html',
//       'My-Header': "Vamsidhar Reddy"
//     })
//     res.end(html.replace('{{%CONTENT%}}', 'You are in about page'))
//   }
//   else if (path.toLocaleLowerCase() === '/contact') {
//     res.end(html.replace('{{%CONTENT%}}', productHtmlArray.join('')))
//   }
//   else if (path.toLocaleLowerCase() === '/products') {
//     let productResponceHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join())
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(productResponceHtml);
//     // console.log(productHtmlArray.join(","));
//   }
//   else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'My-Header': "Vamsidhar Reddy"
//     })
//     res.end(html.replace('{{%CONTENT%}}', 'Error 404 , page not Found'))
//   }
// })
// let port = 8000
// server.listen(port, 'localhost', () => {
//   console.log("Server has Connected " + port);
// })



// 17 Parsing Query String from URL


// let html = fs.readFileSync('./Template/index.html', 'utf-8')
// let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))
// let product_list = fs.readFileSync('./Template/product-list.html', 'utf-8')

// let productHtmlArray = products.map((prod) => {
//   let output = product_list.replace('{{%Image%}}', prod.ProductImage)
//   output = output.replace('{{%NAME%}}', prod.name)
//   output = output.replace('{{%ModelName%}}', prod.ModelName)
//   output = output.replace('{{%ModelNumber%}}', prod.ModelNumber)
//   output = output.replace('{{%Size%}}', prod.Size)
//   output = output.replace('{{%Camera%}}', prod.Camera)
//   output = output.replace('{{%Price%}}', prod.Price)
//   output = output.replace('{{%color%}}', prod.color)
//   output = output.replace('{{%ID%}}', prod.id)

//   return output;
// })


// let server = http.createServer((req, res) => {
//   let { query, pathname: path } = url.parse(req.url, true)
//   // let x=url.parse(req.url,true )
//   // console.log(x);
//   // let path=req.url;
//   if (path === '/' || path.toLocaleLowerCase() === "/home") {
//     res.writeHead(200, {
//       'Content-type': 'text/html',
//       'My-Header': "Vamsidhar Reddy"
//     })
//     res.end(html.replace('{{%CONTENT%}}', 'You are in home page'))
//   }
//   else if (path.toLocaleLowerCase() === '/about') {
//     res.writeHead(200, {
//       'Content-type': 'text/html',
//       'My-Header': "Vamsidhar Reddy"
//     })
//     res.end(html.replace('{{%CONTENT%}}', 'You are in about page'))
//   }
//   else if (path.toLocaleLowerCase() === '/contact') {
//     res.end(html.replace('{{%CONTENT%}}', "You are in Contact Page"))
//   }
//   else if (path.toLocaleLowerCase() === '/products') {
//     if (!query.id) {
//       let productResponceHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(","))
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(productResponceHtml);
//       // console.log(productHtmlArray.join(","));
//     } else {
//       res.end('This is a Produce with ID ' + query.id)
//     }
//   }
//   else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'My-Header': "Vamsidhar Reddy"
//     })
//     res.end(html.replace('{{%CONTENT%}}', 'Error 404 , page not Found'))
//   }
// })
// server.listen('8000', 'localhost', () => {
//   console.log("Server has Connected");
// })





// 18 creating a reusable function


// let html=fs.readFileSync('./Template/index.html','utf-8')
// let products= JSON.parse(fs.readFileSync('./Data/products.json','utf-8'))
// let product_list=fs.readFileSync('./Template/product-list.html','utf-8')
// let product_details=fs.readFileSync('./Template/product_details.html','utf-8')


// let server=http.createServer((req,res)=>{
//   let {query,pathname:path}=url.parse(req.url,true)
//   // let x=url.parse(req.url,true )
//   // console.log(x);
// // let path=req.url;
// if(path==='/' || path.toLocaleLowerCase()==="/home")
// {
// res.writeHead(200,{
//  'Content-type':'text/html',
//  'My-Header':"Vamsidhar Reddy"
// })
// res.end(html.replace('{{%CONTENT%}}','You are in home page'))
// }

// else if(path.toLocaleLowerCase()==='/products')
// {
//  if(!query.id)
//  {
//  let productHtmlArray= products.map((prod)=>{
//     return replacehtml(product_list,prod)
//   })
//   let productResponceHtml=html.replace('{{%CONTENT%}}',productHtmlArray.join(","))
//   res.writeHead(200,{'Content-Type':'text/html'});
//   res.end(productResponceHtml);
//   // console.log(productHtmlArray.join(","));
//  }else{
//   let prod=products[query.id]
//   let product_detailsresponceHtml= replacehtml(product_details,prod)
//   res.end(html.replace('{{%CONTENT%}}',product_detailsresponceHtml))
//  }
// }
// else{
//  res.writeHead(404,{
//      'Content-type':'text/html',
//      'My-Header':"Vamsidhar Reddy"
//     })
// res.end(html.replace('{{%CONTENT%}}','Error 404 , page not Found'))
// }
// })
// server.listen('8000','localhost',()=>{
// console.log("Server has Connected");
// })
