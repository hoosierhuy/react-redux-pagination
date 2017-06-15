import { reducerCall } from './index';

/**
 * Westerosi is plural, westerosus is singular
 */

export default function westerosiReducer(state = {}, action) {
  return reducerCall(state, action, reducerClass);
}

class reducerClass {

  static modalDeleteRender(newState, action) {
    newState.modal = newState.modal ? newState.modal : {};
    newState.modal.listDelete = {
      show: true,
      id: action.id,
      westerosusName: action.westerosusName,
    };
    return newState;
  }

  static modalDeleteClose(newState, action) {
    newState.modal.listDelete = {
      show: false,
      id: 0,
      westerosusName: '',
    };
    return newState;
  }

  static delete(newState, action) {
    newState.list = newState.list.filter(item => item.id !== action.id);
    return newState;
  }

}
