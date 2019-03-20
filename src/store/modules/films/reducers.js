class FilmsReducers {
  loadFilms = (state, action) => {
    return {
      ...state,
      films: []
    }
  }
}

export default new FilmsReducers()
