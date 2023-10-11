import { Link } from 'react-router-dom';

export const MoviesList = ({ data }) => {
  return (
    <div>
      {data.map(({ title, id }) => (
        <div key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};
