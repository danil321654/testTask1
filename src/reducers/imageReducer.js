//import {data} from './../../download.js';
let initialState = {
  images: [],
  isLoading: false,
  selectedImageId: undefined
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_IMAGES':
      return {...state, isLoading: true};
    case 'LOADED_IMAGES':
      return {...state, images: action.payload, isLoading: false};
    case 'SELECT_IMAGE':
      return {
        ...state,
        selectedImageId: action.id
      };
    default:
      return state;
  }
};
