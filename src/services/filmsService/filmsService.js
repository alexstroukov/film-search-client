import config from '../../config'
import fetch from '../fetch'

class FilmsService {
  fetchFilms = () => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${config.tmdbApiKey}&language=en-US&page=1`)
      .then(({ results }) => results)
  }
}

export default new FilmsService()
