import React, { useState, useReducer } from "react";

const initialState = {
  counter1: 0,
  counter2: 10
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter1: state.counter1 + action.value };
    case "decrement":
      return { ...state, counter1: state.counter1 - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h3>
        useReducer for multiple states -{" "}
        <a
          href="https://www.cluemediator.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clue Mediator
        </a>
      </h3>
      <span>First Counter: {state.counter1}</span>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      <br />
      <span>Second Counter: {state.counter2}</span>
      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
        Decrement 10
      </button>
    </div>
  );
}

export default App;
