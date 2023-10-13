import css from "./MovieSearch.module.css"

export const MovieSearch = ({handleSubmit})=>{
    return(
        <form className={css.form} onSubmit={handleSubmit}>
            <label htmlFor="movie-input"></label>
            <input className={css.input} id="movie-input" name="serchMovieName" type="text" placeholder="Enter movie name" />
            <button className={css.btn} type="submit">Search</button>
        </form>
    )
}