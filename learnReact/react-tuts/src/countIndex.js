// createContext 是react提供的一个用于跨组件传值的方法
import React from 'react'
import {render} from 'react-dom'
import App from './countApp'
import { CounterProvider } from './countStore'

render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.querySelector("#root")
)