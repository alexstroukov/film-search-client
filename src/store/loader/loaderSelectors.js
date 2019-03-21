import _ from 'lodash'
import loaderStatuses from './loaderStatuses'

class LoaderSelectors {
  createGetIsInitial = storeName => state => !_.has(state, `${storeName}.status`)
  createGetIsLoading = storeName => state => _.get(state, `${storeName}.status`) === loaderStatuses.PENDING
}

export default new LoaderSelectors()