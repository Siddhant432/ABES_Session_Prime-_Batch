import "./SearchPage.css"
import Card from "./Card";

const card=[
    {
        title:"nice",
        text:"good"
    },
    {
        title:"brocode",
        text:"nice man"
    }

]

const SearchPage=()=>{
    return (
        <div className="search-page">
            <header>
                Logo
            </header>
            <main>
                <h2>Search here..</h2>
               <div>
                {card.map((ele)=>{
                    return <Card title={ele.title} text={ele.text} />
                })}
               </div>
            </main>
            <footer>&copy; Copyright @logo</footer>
        </div>
    )
}

export default SearchPage;