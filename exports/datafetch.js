let abc=async()=>{
   let alldata=await fetch('https://jsonplaceholder.typicode.com/users')

   let data=await alldata.json()
   let ids=data.map((e)=>{return e.id})
   console.log(ids);
   return data;
}
module.exports=abc