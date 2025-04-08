import { useState } from "react";

const App = () => {


  const [userdetail, setUserDetails] = useState({
    name:"Raj",email:"abcs@mail.com",phonenumber:"22244222"
  })
  const [isSubmit, setIssubmiited] = useState(false)

  const handleSubmit = () => {
    if(userdetail.name.length<2){
        alert("Invalid user")
    }
    else{
        setIssubmiited(true)
    }
  }
  console.log(userdetail)

  return (
    <div>
      {
        isSubmit === false ?

          <section >
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="enter name"  value={userdetail.name} onChange={(e)=>{
                const val=e.target.value
                const newItem=userdetail
                newItem.name=val;
                setUserDetails({...newItem})
              }}  />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text"  placeholder="enter email"  value={userdetail.email} onChange={(e)=>{
                const val=e.target.value
                const newItem=userdetail
                newItem.email=val
                setUserDetails({...newItem})
              }}  />
            </div>
            <div>
              <label htmlFor="">Phone No.</label>
              <input type="text"  placeholder="enter number" value={userdetail.phonenumber} onChange={(e)=>{
                const val=e.target.value
                const newItem=userdetail
                newItem.phonenumber=val
                setUserDetails({...userdetail})
              }}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>


          </section>
          :
          <section>
            <div >
              {
                Object.entries(userdetail).map(([key,val])=>{
                    return(
                        <h3 key={key}>
                            {key}::{val}
                        </h3>
                    )
                })
              } 
              {
                Object.entries(userdetail).map((ele,idx)=>{
                    return(
                        <h3 key={ele[0]}>
                            {idx}.{ele[0]}::{ele[1]}
                        </h3>
                    )
                })
              }          
            </div>
          </section>
      }

    </div>
  )
}

export default App;