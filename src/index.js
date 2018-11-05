import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { FetchProvider } from './hoc/fetchMovieDb'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <FetchProvider apiKey="c5742978852b8f695a61e22a33a8196c">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FetchProvider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
