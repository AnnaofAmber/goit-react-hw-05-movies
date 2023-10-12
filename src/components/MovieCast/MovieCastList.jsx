import { MovieCastItem } from "./MovieCastItem";

export const MovieCastList = ({data}) =>{
return(
    <ul>
        {data.map(e=> (
        <MovieCastItem key={e.id} image={`https://image.tmdb.org/t/p/w300/${e.profile_path}`} name={e.name} role={e.character}/>)
        )}
    </ul>
)
}