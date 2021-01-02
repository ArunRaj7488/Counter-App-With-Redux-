import * as ActionTypes from "./action";
const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case ActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ActionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case ActionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case ActionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case ActionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (res) => res.id !== action.resElementId
      );
      return {
        ...state,
        results: updatedArray,
      };
  }

  return state;
};

export default reducer;
