import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import store from './store'
import FilmsPage from './pages/FilmsPage'
import PageNotFound from './pages/PageNotFound'

export default () => (
  <Provider store={store}>
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={FilmsPage} />
            <Route component={PageNotFound} />
          </Switch>
        </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
)
