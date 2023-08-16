let abc=require('./datafetch')

let xyz=async()=>{
    let data=await abc()
  let emails=data.map((e)=>{return (e.email)})
  let names=data.map((e)=>{return e.name})
  console.log(emails);
  console.log(names);

}
xyz()