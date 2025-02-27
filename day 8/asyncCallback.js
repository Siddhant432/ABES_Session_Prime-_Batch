// console.log("start")

// const handleInnerCall=()=>{
//     console.log("Step Y")
// }

// const handleCall=()=>{
//     console.log("Step M")

//     handleInnerCall()

//     console.log("Step N")
// }

// //handleCall()
// //document.querySelector("body").addEventListener("click",handleCall)

// setTimeout(handleCall,0 ) //time in milisec
// console.log("end")

// setTimeout()

// console.log("A")
// const handleCall=()=>{
//     console.log("H")
// }

// setTimeout(()=>{
//     console.log("N")
//     setTimeout(()=>{
//         console.log("P")
//     },0)
//     handleCall()
//     console.log("B")
// },5000)

// console.log("C")


/*

hyderabad: take user credentials and authenticate
--> handleUser()
noida: make payment from wallet by doing the requred checks
--> handlePayment(id)

banglore: to handle these 2 teams and implement wallet functionality
//case1 (requirement)
-->const userId=handleUser()
-->if(userId){
    const rep=handlePayment(userId)
    console.log(resp)
-->}
-->else{
   console.log("invalid details")
-->}

//using callbacks
-->const rep=handleUser(handlePayment)
            //what if the team calls handlePayment 2 times?
            //or even with wrong credentials }
            //or never calls it?
--> console.log(rep)

//using promises
--> const rep=handleuser() =>return a promise
--> then{
    const resp=handlePayment(userId)
    console.log(resp)
}
-->catch{
    console.log("invalid details")
}
*/

// const res=fetch("http://api.github.com/users/likbalpande")
//const res=fetch("")
const getData=(e)=>{
    const profile=e.target.value;
    const pr=fetch(`https://api.github.com/users/${profile}`)
    console.log(pr)
    
    pr.then((a)=>{
    
        console.log("a",a)
        const pr2=a.json()
        pr2.then((data)=>{
            
            //console.log("data",data)
            showUI(data)
        })
    }).catch((b)=>{
        console.log("b",b)
    })
}

getData()



function showUI(data){
    //responsible for creating a visualization
    console.log("data:",data)
    const {avatar_url,login,html_url}=data
    const root=document.getElementById('cards')
    const newcard=document.createElement('div')
    newcard.id="card"
    newcard.innerHTML=`
    <h4>${login.toUpperCase()}</h4>
    <img src='${avatar_url}' alt='avatar'>
    <a href=${html_url}>View Profile</a>
    `;
    root.appendChild(newcard)
    storeData(data)
}

function storeData(data) {
    const oldData = localStorage.getItem("searches"); // returns a JSON string
    const arr = JSON.parse(oldData || "[]");
    arr.push(data);
    localStorage.setItem("searches", JSON.stringify(arr)); //key, value
}

function showHistory() {
    const oldData = localStorage.getItem("searches"); // returns a JSON string
    const arr = JSON.parse(oldData || "[]");
    // if(oldData === undefined) arr = JSON.stringify('[]');
    arr.forEach((data) => {
        showUI(data);
    });
}

showHistory();