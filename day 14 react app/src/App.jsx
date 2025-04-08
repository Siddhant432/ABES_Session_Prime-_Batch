//import { useState } from "react"

import { useState } from "react"

const Appform=()=>{
  //let name="r"
  //const [monitor,remote]=useState()
  //console.log("re-rendered",monitor)
  //const handleChange=(e)=>{
  //  //console.log(e.target.value)
  //  //name=e.target.value
  //  //console.log(name)
  //  setTimeout(()=>{
  //    console.log(e.target.value + e.nativeEvent.data)
  //    if(e.nativeEvent.inputType==="deleteContentBackward"){
  //      remote(e.target.value.substring(0,e.target.value.length-1))
  //    }
  //    else{
  //      remote(e.target.value + e.nativeEvent.data)
  //    }
  //    
  //  },3000)
  //  console.log("updated",monitor)
  //}
  const [flag,setflag]=useState(true)
  let greetings="hola"
  const [username,setUsername]=useState()
  const handleClick=()=>{
    greetings="good evening"
    setflag(false)
  }
  const handleChange=(e)=>{
    setUsername(e.target.value)
  }
  //if(flag===true){
  //    return(
  //      <section>
  //        <div style={{display:"flex"}}>Hello</div>
  //        <button onClick={handleClick}>Submit</button>
  //      </section>
  //    )
  //}
  //else{
  //  return(
  //    <section>
  //      <div style={{display:"flex"}}>Hi</div>
  //    </section>
  //  )
  //}

  return(
    <section>
      {
        flag===true ?
        <div>
          <input type="text" onChange={handleChange}/>
          <button onClick={handleClick}>Submit</button>
        
        </div>
        :
        <div style={{display:"flex"}}>
          <p>Hi {username}</p>
          <p>{greetings}</p>
        </div>
      }
    </section>
  )
  
   
  
}

export default Appform;