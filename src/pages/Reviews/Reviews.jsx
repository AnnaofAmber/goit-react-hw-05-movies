import css from './Reviews.module.css';
import Notiflix from 'notiflix';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { MovieReviewsList } from 'components/MovieReviews/MovieReviewsList';
import { Loader } from 'components/Loader/Loader';

import { fetchReview } from 'pages/api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        setIsLoading(true);
        const result = await fetchReview(movieId);

        if (result.length === 0) {
          return;
        } else if (reviews.length === 0) {
          setReviews(result);
        }
      } catch (error) {
        setApiError(true);
        Notiflix.Notify.failure(
          `Oops! Something went wrong! Error ${apiError} Try reloading the page!`
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReview();
  }, [apiError, movieId, reviews]);

  return (
    <div>
      {reviews.length > 0 ? (
        <MovieReviewsList data={reviews} />
      ) : (
        <div className={css.review}>There are no reviews yet!</div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Reviews;
