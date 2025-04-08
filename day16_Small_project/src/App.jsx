import React, { useState } from "react";
import p from "papaparse";
import Card from "./Compnents/Card";

const App=()=>{
  const [profiles,setprofiles]=useState([])
  const handleFileupload=(e)=>{
    const file=e.target.files[0]
    p.parse(file,{header:true,complete:handleData})
    console.log(e)
  }
  const handleData=(res)=>{
    const {data,errors}=res
    if(errors.length>0){
      alert("error")
    }
    else{
      console.log(data)
      setprofiles(data)
    }
  }
  return(
    <div>
      <div>
        <input type="file" accept=".csv" onChange={handleFileupload} />
      </div>
      <div>
        {
          profiles.map((ele)=>
            <Card name={ele.name} email={ele.email} githubLink={ele.githubLink}></Card>
          )
        }
      </div>
    </div>
  )
}

export default App;