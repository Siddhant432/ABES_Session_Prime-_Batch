// controlled components

// import { useState } from "react";

// const App=()=>{


//   const[name,setName]=useState()
//   const [email,setEmail]=useState()
//   const [isSubmit,setIssubmiited]=useState(false)

//   const handleClick=()=>{
//     if(name.length<2){
//       alert("Invalid name")
//     }
//     else{
//       setIssubmiited(true)
//     }
//   }

//   return(
//     <div>
//       {
//         isSubmit===false ?

//       <section>
//           <div>
//             <label htmlFor="">Name</label>
//             <input type="text" onChange={(e)=>{
//               setName(e.target.value)
//             }}
//             placeholder="enter name" value={name} />
//             </div>
//             <div>
//             <label htmlFor="">Email</label>
//             <input type="text" placeholder="enter email" value={email} onChange={(e)=>{
//               setEmail(e.target.value)
//             }}/>
//             </div>
//             <button onClick={handleClick}>Submit</button>


//         </section>
//         :
//         <section>
//           <div >
//             <h2>Name:{name}</h2>
//             <h4>Email:{email}</h4>
//           </div>
//         </section>
//       }

//     </div>
//   )
// }

// export default App;



import { useState } from "react";

const App = () => {


  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [isSubmit, setIssubmiited] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e)
    if (e.target.username.value.length < 2) {
      alert("Invalid error")
    }
    else {
      setName(e.target.username.value)
      setEmail(e.target.useremail.value)
      setIssubmiited(true)
    }
  }

  return (
    <div>
      {
        isSubmit === false ?

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" name="username"
                placeholder="enter name"  />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" name="useremail" placeholder="enter email"  />
            </div>
            <button>Submit</button>


          </form>
          :
          <section>
            <div >
              <h2>Name:{name}</h2>
              <h4>Email:{email}</h4>
            </div>
          </section>
      }

    </div>
  )
}

export default App;