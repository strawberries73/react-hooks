/* eslint-disable no-template-curly-in-string */
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const initialState = {
  message: "hi"
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: 'HEY! I JUST SAID ${state.message}'
      };
    case "whisper":
      return {
        message: 'excuse me, I just said ${state.message'
      };
      default:
  }
}
function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
    <p>Message: {state.message}</p>
    <button onClick={() => dispatch({ type: "yell"})}>Yell</button>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

