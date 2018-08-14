import * as types from './actionTypes';
import { resolve } from 'path';

export function receiveItem(item) {
  return {type: types.RECEIVE_ITEM, item: item};
}

export function fetchItem() {
    
    const getItemAsync = () => {
        const newItem = () => {
            return {
                id:77, 
                name: 'Joe'
            };
        }

        return new Promise((resolve, reject)=> {
            try {
                setTimeout(()=> { 
                    resolve(newItem()); 
                }, 100);
            }
            catch(err) {
                reject(err);
            }
        });
    };

  return dispatch => {
    return getItemAsync()
    .then(response => dispatch(receiveItem(response)));
  };
}