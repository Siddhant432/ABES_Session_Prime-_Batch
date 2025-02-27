const getData=(text)=>{
    const pr=fetch(`https://dummyjson.com/recipes/search?q=${text}`)
    pr.then((res)=>{
        const pr2=res.json()
        pr2.then((data)=>{
            showCards(data.recipes)
        })
    })
}

const root=document.getElementById("abc")
const showCards=(dataArr)=>{
    dataArr.forEach((ele)=>{
        const newDiv=document.createElement('div')
        newDiv.className="card"
        newDiv.innerHTML=`
         <h4>${ele.name}</h4>
         <img src="${ele.image}" width="100px">
         <p>${ele.cusine}</p>
        `
        root.appendChild(newDiv)
    })
}
let timeoutId=null
const handleSearch=(e)=>{
    timeoutId=setTimeout(()=>{
        getData(e.target.value)
    },1000)
    
}