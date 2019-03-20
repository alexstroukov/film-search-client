class FilmsReducers {
  loadFilms = (state, action) => {
    return {
      ...state,
      films: action.result
    }
  }
}

export default new FilmsReducers()
