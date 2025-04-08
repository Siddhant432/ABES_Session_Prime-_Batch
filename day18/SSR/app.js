const http=require("http")
const port=1200
const fspromises=require("fs/promises")

const getData=async()=>{
    const resp=await fetch("https://dummyjson.com/products")
    const data=await resp.json()

    return data.products
}


const getProductsHTMLCode=(products)=>{
    let result=""
    products.forEach(({title,price})=>{
        
        result+=`
        <div class="card">
        <h4>${title}</h4>
        <p>${price}</p>
        </div>
        `
        
    })
    return result;
}

const server=http.createServer(async(req,res)=>{

    console.log("-------request received--------")
    //console.log(typeof req)
    //console.log(Object.keys(req))
    console.log(req.url)
    res.setHeader("content-type","text/html")
    res.setHeader("myname","Sid")
    

    const resp=await fspromises.readFile("./pages/homePage.html",{
        encoding:"utf-8"
    })
    const products=await getData()
    const productsHTMLCode=getProductsHTMLCode(products)
    console.log(productsHTMLCode)
    const newpage=resp.replace("_PRODUCTS_",productsHTMLCode)

    res.end(newpage);
});


server.listen(port,()=>{
    console.log(`Server is running at ${port}`)
    console.log(`http://localhost:${port}`)
});