import { MovieCastItem } from "./MovieCastItem";

export const MovieCastList = ({data}) =>{
return(
    <ul>
        {data.map(e=> (
        <MovieCastItem key={e.id} image={e.profile_path? `https://image.tmdb.org/t/p/w300/${e.profile_path}`:'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'} name={e.name} role={e.character}/>)
        )}
    </ul>
)
}