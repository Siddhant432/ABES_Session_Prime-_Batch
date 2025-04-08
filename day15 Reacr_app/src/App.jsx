import React, { useEffect, useState } from "react";
import Card from "./Card";
const Apppage=()=>{
//const getData=()=>{
//  const pr1=fetch("https://dummyjson.com/products")
//  pr1.then((res)=>{
//    console.log("Res",res)
//    const pr2=res.json()
//    pr2.then((data)=>{
//      console.log(data)
//    })
//  }).catch((err)=>{
//    console.log("Err",err)
//  })
//}
//
//const getData=()=>{
//  const pr1=fetch("https://dummyjson.com/products")
//  pr1.then((res)=>{
//    
//    const pr2=res.json()
//    return pr2;
//  }).catch((err)=>{
//    console.log("Err",err)
//  })
//}
// const getData=()=>{
//   const pr1=fetch("https://dummyjson.com/products")
//   pr1.then((res)=>res.json())
//   .catch((err)=>{
//     console.log("err",err)
//   })
//   .then((data)=>{
//     console.log("data",data)
//   })
// }
const [monitor,remote]=useState({})
const [currpg,setcurrpg]=useState(0)
const getData=async ()=>{
  try{
    const res=await fetch(`https://dummyjson.com/products?limit=10&skip=${10*(currpg)}`)
    const data=await res.json()
    console.log("data",data)
    remote(data)
  }
  catch(err){
    console.log("error",err)
  }
  finally{
    console.log("Completed successfully")
  }
}
  

//getData()

useEffect(()=>{
  getData()
  // array(absent)- don't make much difference
  //array(empty)- it only run side effect once
  //array(few data)-
},[currpg])
const totalpg=Math.ceil(monitor.total/monitor.limit)
const pages=[]
for(let i=0;i<totalpg;i++){
  pages.push(i+1)
}
  return (
    <> 
      <h1>Hello</h1>
      <p>Something...</p>
      <hr></hr>
      <h3>{monitor.products?.[0].title}</h3>
      <select
          onChange={(e)=>{
            setcurrpg(e.target.value)
          }}>
        {pages.map((pgnum)=>{
          return <option>{pgnum}</option>
        })}
      </select>
      {monitor.products?.map((ele)=>{
        return <Card title={ele.title} price={ele.price} thumbnail={ele.thumbnail}></Card>
      })}
      {/*optional change */}
      {/*conditional rendering*/}
      {/*nullish coalescing */}

    </>
  )
}
export default Apppage;