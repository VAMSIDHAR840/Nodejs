let A=()=>{
    return "i got job in electronic city"
}

let B=()=>{
    return new Promise ((resolve,result)=>{
        setTimeout(()=>{
            resolve ("i am searching for a job") 
        },3000)
    })
}

let C=()=>{
    return "i am doing part time job"
}

let abc=async()=>{
    console.log(A());
    console.log(await B());
    console.log(C());
}
abc()