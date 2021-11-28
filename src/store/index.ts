import { createStore, combineReducers, compose } from "redux"

export const reducers = combineReducers({
  
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

export const store = createStore(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args: any) => args,
  ),
)
