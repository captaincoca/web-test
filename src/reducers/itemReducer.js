import initialState from './initialState';
import {FETCH_ITEM, RECEIVE_ITEM} from '../actions/actionTypes';

export default function item(state = initialState.item, action) {
  let newState;
  switch (action.type) {
    case FETCH_ITEM:
      console.log(`${action.type} Action`);
      return action;
    case RECEIVE_ITEM:
      newState = action.item;
      console.log(`${action.type} Action`)
      return newState;
    default:
      return state;
  }
}