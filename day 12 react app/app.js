import React from "react";
import ReactDOM from "react-dom/client"
import Wallpaper ,{title} from "./components/card";
import { Button } from "./components/button";
const domRoot=document.getElementById("parent")
const reactRoot=ReactDOM.createRoot(domRoot)

//const Card=({username})=>{
//  //console.log(abc)
//  //console.log(abc.username)
//  return (
//    <div className="card">
//      <h3>Hello {username}!</h3>
//      <p>Nice to meet you</p>
//    </div>
//  )
//}

const App = () => {
  return (
    <div>
      <Button color="submit">Submit</Button>
      <Button color="danger">Cancel</Button>
      <Wallpaper username={title}></Wallpaper>
      <Wallpaper username="pinpin"></Wallpaper>
      <Wallpaper username="Vipul"></Wallpaper>
      {Wallpaper({username:"Bansi"})}


    </div>

    //React.createElement("h1",{},"hello from App")
  )
}
console.log("hello")
reactRoot.render(<App/>)

