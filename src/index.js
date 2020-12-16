// createStore that takes in a reducer function as an argument.
function createStore(reducer) {
  let state;

  //`dispatch` should take in an action,
 // update the state using the reducer, and call the render function.
  function dispatch(action){
    state = reducer(state, action)
    render();
  }

  // `getState` should return the current state.
  function getState() {
    return state;
  }

  //createStore function should return an object with two methods - getState, dispatch.
  return { 
    dispatch,
    getState
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

//Define a variable named store and assign it to whatever is returned by the createStore function 
//you've written when it is passed the candyReducer function.

//Initialize your state using a dispatch call to the reducer.

let store = createStore(candyReducer)
store.dispatch({ type: '@@INIT' });


// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.
