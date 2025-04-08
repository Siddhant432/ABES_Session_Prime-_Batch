const cardstyle={
    backgroundColor:"yellow",
}

const Card=({title,text})=>{
    return(
        <div style={cardstyle}>
                
                   
            <div>
                <h3>{title}</h3>
                <label htmlFor="">{text}</label>
            </div>
                    
            
        </div>
    )
}

export default Card;