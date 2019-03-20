class FilmsSelectors {
  getFilms = (state) => {
    return state.films.films
  }
}

export default new FilmsSelectors()
