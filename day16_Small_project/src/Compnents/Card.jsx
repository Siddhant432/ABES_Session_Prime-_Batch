const Card=({name,email,githubLink})=>{
    return(
        <div>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <a href={githubLink} target="blank">View Profile</a>
        </div>
    )
}
export default Card