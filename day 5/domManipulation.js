console.dir(document)
document.children[0].children[1].children[0].style.color="red"

const outerdiv=document.querySelector("div")
outerdiv.style.backgroundColor="blue"
 

const divChildren=Array.from(document.querySelectorAll("div div"))

divChildren.forEach((ele)=>{
    ele.style.backgroundColor="yellow"
})

const mapping={
    invitation:"you are invited for event",
    reminder:"you are reminded for task",
    notice:"you have a notice from college",
    message:"you have 7 messages"
}

//divChildren[0].children[1].innerHTML="Hello everyone"
const p=Array.from(document.querySelectorAll("div p"))
console.dir(p)
p.forEach((ele)=>{
    ele.innerHTML="Hello everyone"
})

const newele=document.createElement("div")
const rootele=document.querySelector("body")
newele.innerHTML="Hello baby"
rootele.appendChild(newele)

console.log(Object.entries(mapping))
Object.entries(mapping).forEach((ele)=>{
    const newChilddiv=document.createElement("div")
    newChilddiv.style.border="1px solid black"
    const h4=document.createElement("h4")
    h4.innerHTML=`${ele[0]}`
    const p=document.createElement("p")
    p.innerHTML=`${ele[1]}`
    newChilddiv.append(h4)
    newChilddiv.append(p)

    h4.style.color="orange"
    p.style.color="green"
    
    newele.appendChild(newChilddiv)
})