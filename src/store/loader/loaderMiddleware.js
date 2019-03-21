import loaderStatuses from './loaderStatuses'
/*
  Must go before redux-thunk middleware.
  Simplifies loading data.
  Add load property to action where the value is a thunk. e.g.
  {
    type: 'LOAD_DATA',
    load: (dispatch, getState) => {
      return dataService.loadData()
    }
  }
*/
const createLoaderThunk = ({ load, action }) => (dispatch, getState) => {
  dispatch({ ...action, status: loaderStatuses.PENDING })
  return load(dispatch, getState)
    .then(result => {
      const successAction = { ...action, result, status: loaderStatuses.SUCCESS }
      dispatch(successAction)
      return Promise.resolve(result)
    })
    .catch(error => {
      dispatch({ ...action, error, status: loaderStatuses.FAIL })
      return Promise.reject(error)
    })
}
const loaderMiddleware = () =>{
  return next => (action) => {
    const { load, ...rest } = action
    if (load) {
      next(createLoaderThunk({ load, action: rest }))
    } else {
      next(action)
    }
  }
}

export default loaderMiddleware