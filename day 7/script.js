const data=[
    {
        id:"abc1",name:"Rakesh",city:"Delhi"
    },
    {
        id:"abc2",name:"Mohan",city:"Noida"
    },
    {
        id:"abc3",name:"Rishab",city:"Mumbai"
    }
]

const root=document.getElementById("root")

const showcard=(newdata)=>{
    root.innerHTML="";
    newdata.forEach((ele,idx)=>{
        const card=document.createElement('div')
        card.className="card"
        
        card.innerHTML=`
        <h4>${ele.name}</h4>
        <p>${ele.city}</p>
        <button onClick="removeele(event,'${ele.id}')">delete</button>
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

    const ind=data.findIndex((ele)=>ele.id==idx)
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