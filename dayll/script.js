//const root=document.getElementById("showele")
//addElement=()=>{
//    const ele=document.getElementById("enterele")
//    const ele1=ele.value
//    const a=document.createElement('div')
//    a.innerHTML=`
//    <h4>${ele1}</h4>`
//    root.appendChild(a)
//
//}
//const ul=document.createElement('ul')
//const l1=document.createElement('li')
//const l2=document.createElement('li')
//const l3=document.createElement('li')
//
//
//l1.innerHTML="item1"
//
//l2.innerHTML="item2"
//
//l3.innerHTML="item3"
//ul.appendChild(l1)
//ul.appendChild(l2)
//ul.appendChild(l3)
//
//root.appendChild(ul)

const domRoot=document.getElementById("parent")

console.log(React)
console.log(ReactDOM)

//const reactRoot=ReactDOM.createRoot(domRoot)
//
//const li1=React.createElement("li",{
//        style :{
//            color:"blue",
//        },
//    }
//,"item1") // type,options,children
//const li2=React.createElement("li",{
//    className:"text-big",
//},"item2") 
//const li3=React.createElement("li",{},"item3")
//
//const ul=React.createElement("ul",{},[li1,li2,li3])  // if we have mulitple children to add then we will store them in array []

const reactRoot=ReactDOM.createRoot(domRoot)

const title=React.createElement("h1",{},"Hello From React DOM!")

console.log("type of title:",typeof title)
console.log("title:",title)

//const title2={
//    $$typeof:Symbol.for("react.element"),  // this is for security purpose 
//    "type": "h2",
//    "key": null,
//    "ref": null,
//    "props": {
//        style:{color:"brown"},
//        "children": "Hello From React DOM!"
//    },
//    "_owner": null,
//    "_store": {}
//}

//const title2=<h4>Helloo from JSX</h4>    // react element 

const Title3=()=>{
    return <h1>Hello from JSX Again</h1>
}  // react component

//reactRoot.render(Title3())
reactRoot.render(<Title3/>)