import { MoviesItem } from "components/MoviesItem/MoviesItem";

export const MoviesList = ({ data }) => {
  return (
    <ul>
      {data.map(({ title, id }) => (
<MoviesItem key={id} title={title}/>
      ))}
    </ul>
  );
};

