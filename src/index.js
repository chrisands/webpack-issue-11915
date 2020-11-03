import React from 'react'
import { render } from 'react-dom'

const renderApp = () => {
  const { App } = require('./main.js')

  render(<App />, document.getElementById('root'))
}

renderApp()

if (process.env.NODE_ENV && module.hot) {
  module.hot.accept('./main.js', renderApp)
}
