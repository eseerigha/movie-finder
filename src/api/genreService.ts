import { Genre, GenreResponse } from 'types';
import { getGenres } from 'api/movieService';

export const fetchGenres = async (genres: Genre[]) => {
  let movieGenres: GenreResponse = {};
  if (!genres.length) {
    movieGenres = await getGenres();
  }
  return movieGenres?.genres ?? genres;
};
