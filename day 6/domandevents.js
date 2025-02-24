const data=[
    {name :'Anuj',city:'Delhi',email:'anuj@gmail.com'},
    {name :'Rakesh',city:'Mumbai',email:'rakesh@gmail.com'},
    {name :'Aman',city:'GZB',email:'aman@gmail.com'},
    {name :'vipul',city:'GZB',email:'vip@gmail.com'}
]

const root=document.getElementById('parent')
data.forEach((ele)=>{
    const newcard=document.createElement('div')

    newcard.addEventListener("click",()=>{
        newcard.style.backgroundColor=getRandomcolor()
        console.log("div clicked")
    })
    //setAttribute
    //classList.add
    newcard.className='card'
    newcard.innerHTML=`
    <h4>${ele.name}</h4>
    <h6>${ele.email}</h6>
    <p class="text"> ${ele.city} </p>
    `
    root.appendChild(newcard)
})

const handlebackbroundChange=()=>{
    console.log("btn clicked")
    const bodyele=document.querySelector('body')
    bodyele.style.backgroundColor=getRandomcolor();
}

const getRandomcolor=()=>{
    const randomred=Math.floor(Math.random()*255)
    const  randomgreen=Math.floor(Math.random()*255)
    const randomblue=Math.floor(Math.random()*255)
    return `rgb(${randomred},${randomgreen},${randomblue})`

}

const textcolor=document.querySelector('.text')
textcolor.addEventListener("click",(event)=>{
    textcolor.style.backgroundColor=getRandomcolor()
    console.log("para clicked " , event)
})