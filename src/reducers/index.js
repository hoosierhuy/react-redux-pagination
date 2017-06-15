import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import westerosiReducer from './westerosiReducer';

/**
 * I'm fully aware that JavaScript can hoist,
 * but it makes a better mental image if I declare something before I use
 * in the factory function further below.
 */
function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

export function reducerCall(state, action, reducerClass) {
  // get the action class method
  const [, method] = action.type.split('.');

  // get all class methods
  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if (('length' !== name) && ('name' !== name) && ('prototype' !== name)) {
      return name;
    }
  });

  // check if action methods exists
  if (methods.find(x => x === method)) {
    // clone the state
    const newState = cloneObject(state);
    // return the static method
    return reducerClass[method](newState, action);
  }
  else {
    return state;
  }
}

export const reducers = combineReducers({
  routing: routerReducer,
  westerosi: westerosiReducer,
});
