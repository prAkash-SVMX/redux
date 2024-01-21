import {increment} from './type';
const intialState = {number:0};

const actionReducer = (state = intialState, action) => {
  switch (action?.type) {
    case increment:
      return {
        ...state,
        number: action?.payload,
      };
    default:
      return {...state};
  }
};
export default actionReducer;
