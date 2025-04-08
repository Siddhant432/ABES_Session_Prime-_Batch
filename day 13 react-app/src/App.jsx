import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import {BrowserRouter,Route,Routes} from "react-router"
import NotFound from "./pages/NotFoundPage";

//const App = () => {
  // const { location } = window
  // const { pathname } = location
  // if (pathname === "/") {
  //   return (
  //     <div>
  //       <HomePage />
  //     </div>
  //   )
  // }
  // else if (pathname === "/search") {
  //   return (
  //     <div>
  //       <SearchPage />
  //     </div>
  //   )
  // }
  // else {
  //   return (
  //     <div>
  //       <h1>Oops.. page not found</h1>
  //       <a href="/">Home</a>
  //     </div>
  //   )
  // }

//}



const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFound/>} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;