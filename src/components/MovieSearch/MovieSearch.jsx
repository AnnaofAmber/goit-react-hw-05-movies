import css from "./MovieSearch.module.css"

export const MovieSearch = ({handleSubmit})=>{
    return(
        <form className={css.form} onSubmit={handleSubmit}>
            <label htmlFor="movie-input"></label>
            <input id="movie-input" name="serchMovieName" type="text" placeholder="Enter movie name" />
            <button type="submit">Search</button>
        </form>
    )
}