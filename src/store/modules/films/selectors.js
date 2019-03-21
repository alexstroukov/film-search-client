import { loaderSelectors } from '../../loader'

class FilmsSelectors {
  getFilms = (state) => {
    return state.films.films
  }
  getIsInitial = loaderSelectors.createGetIsInitial('films')
  getIsLoading = loaderSelectors.createGetIsLoading('films')
}

export default new FilmsSelectors()
