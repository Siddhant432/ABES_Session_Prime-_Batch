
const data=[
    {
        email:"rakesh@gmail.com",name:"Rakesh",city:"Delhi"
    },
    {
        email:"mohan@gmail.com",name:"Mohan",city:"Noida"
    },
    {
        email:"mohanh@gmail.com",name:"Rishab",city:"Mumbai"
    }
]

//const cities=data.map((ele)=>ele.city)
const seleElement=document.getElementsByTagName("select")[0]


const showOptions=()=>{
    seleElement.innerHTML=''
    const citiesobj={}
    data.forEach((ele)=>(citiesobj[ele.city]=true))
    const cities=Object.keys(citiesobj)

    cities.forEach((city)=>{
        const newoption=document.createElement("option")
        newoption.value=city
        newoption.innerText=city
        seleElement.appendChild(newoption)
    })
}

const root=document.getElementById("root")

const showcard=(newdata)=>{
    showOptions()
    root.innerHTML="";
    newdata.forEach((ele)=>{
        const card=document.createElement('div')
        card.className="card"
        
        card.innerHTML=`
        <h5>${ele.email}</h5>
        <h4>${ele.name}</h4>
        <p>${ele.city}</p>
        <button onClick="removeele(event,'${ele.email}')">delete</button>
        `
        root.appendChild(card)
    })
    
    
}

const removeele=(e,idx)=>{
    // one way to delete
    //console.log(e.target.parentElement)
    //console.log("element remove")
    //e.target.parentElement.remove()

    // another way to delete
    //console.log(e,idx);
    //data.splice(idx,1)  //its parameters is like index , no of elments to delete
    //showcard(data)

    const ind=data.findIndex((ele)=>ele.email==idx)
    data.splice(ind,1)
    showcard(data)
    
}




const selectByCity=(e)=>{
    const selectCity=e.target.value
    const newdata=data.filter((ele)=>{
        if(ele.city === selectCity){
            return true
        }
        return false
    })
    showcard(newdata)
}
showcard(data)
//selectByCity(e)


const handleFormSubmit=(e)=>{
    //console.log(e)
    e.preventDefault();
    console.log(e.target.email.value)
    console.log(e.target.name.value)
    console.log(e.target.city.value)

    const isEmailExist=data.some((ele)=>ele.e===e.target.email.value)

    if(isEmailExist){
        alert("Email already exist")
        return;
    }

    const newEle={
        email:e.target.email.value,
        name:e.target.name.value,
        city:e.target.city.value

    }
    data.push(newEle)
    showcard(data)
    
}
