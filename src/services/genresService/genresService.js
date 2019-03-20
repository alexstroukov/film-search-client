import config from '../../config'
import fetch from '../fetch'

class GenresService {
  fetchGenres = () => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.tmdbApiKey}&language=en-US`)
      .then(({ genres }) => genres)
  }
}

export default new GenresService()
