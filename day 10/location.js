const getData=(text)=>{
    const pr=fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,{
        method:'GET',
        headers: {
            'x-rapidapi-key': '0599135136msh9997be18ce390a3p1178d1jsn290ced4b5230',
            'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
        }
    })
    pr.then((res)=>{
        const pr2=res.json()
        pr2.then((data)=>{
            showlocation(data)
        })
    })
}
const root=document.getElementById("location")
const showlocation=(data)=>{
    const {predictions}=data
    predictions.forEach((ele)=>{
        const p=document.createElement("p")
        p.innerText=ele.description
        root.appendChild(p)
    })
}

const handleSearch=(e)=>{
    getData(e.target.value)
}
