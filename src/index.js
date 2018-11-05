import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { FetchProvider } from './hoc/fetchMovieDb'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'

ReactDOM.render(
  <FetchProvider apiKey="c5742978852b8f695a61e22a33a8196c">
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </FetchProvider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
