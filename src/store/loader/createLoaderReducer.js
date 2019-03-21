import loaderStatuses from './loaderStatuses'
/*
  Handles default behavior for loader actions by setting the status of load request and load action on store.
  e.g.
  loadDataReducer = createLoaderReducer(
    (state, action) => {
      return {
        ...state,
        results: action.result
      }
    }
  )
*/
const createLoaderReducer = (
  mapSuccessState = state => state,
  mapPendingState = state => state,
  mapFailState = state => state
) => (state, action) => {
  switch (action.status) {
    case loaderStatuses.PENDING:
      return {
        ...(mapPendingState(state, action)),
        status: loaderStatuses.PENDING,
        action: action.type
      }
    case loaderStatuses.SUCCESS:
      return {
        ...(mapSuccessState(state, action)),
        status: loaderStatuses.SUCCESS,
        action: undefined,
        error: undefined
      }
    case loaderStatuses.FAIL:
      return {
        ...(mapFailState(state, action)),
        status: loaderStatuses.FAIL,
        action: undefined,
        error: action.error.message
      }
  }
}

export default createLoaderReducer
