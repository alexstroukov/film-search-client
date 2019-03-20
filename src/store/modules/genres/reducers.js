class GenresReducers {
  loadGenres = (state, action) => {
    return {
      ...state,
      genres: action.result
    }
  }
}

export default new GenresReducers()
