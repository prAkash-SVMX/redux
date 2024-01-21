import {increment} from './type';
export const incrementAction = number => {
  return {
    type: increment,
    payload: number,
  };
};
