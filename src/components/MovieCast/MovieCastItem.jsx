export const MovieCastItem = ({image, name, role})=>{
    return(
        <li>
            <img src={image} alt={name} />
            <p>Name: {name}</p>
            <p>Character: {role}</p>
        </li>
    )
}