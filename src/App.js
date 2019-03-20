import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import store from './store'
import Header from './containers/Header'
import FilmsPage from './pages/FilmsPage'
import PageNotFound from './pages/PageNotFound'

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={FilmsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)
