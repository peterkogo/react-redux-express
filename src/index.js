import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from '../components/App'
import configureStore from './configureStore'

const store = configureStore()

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} >
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('../components/App', () => { render(App) })
}
