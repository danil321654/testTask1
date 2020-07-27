import axios from 'axios';
import {loadedImages} from './loadedImages';
export const requestImages = () => {
  return function(dispatch) {
    dispatch({
      type: 'REQUEST_IMAGES',
    });
    axios
      .get(
        'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
      )
      .then(resp => {
        console.log(resp);
        dispatch(loadedImages(resp.data));
      });
  };
};
