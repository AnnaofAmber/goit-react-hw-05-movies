import { fetchReview } from 'api';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { MovieReviewsList } from 'components/MovieReviews/MovieReviewsList';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        setIsLoading(true);
        const result = await fetchReview(movieId);

        if (reviews.length === 0) {
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
  });

  return (
    <div>
      <MovieReviewsList data={reviews} />
      {isLoading && <Loader />}
    </div>
  );
};
