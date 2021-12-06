export const Actions = {
  API_CALL: 'call_api',
  SUCCESS: 'success',
  ERROR: 'error',
  GET_THUMBNAILS: 'get_thumbnails',
};

export const initialState = {
  albumDetails: [],
  userDetails: [],
  loading: false,
  error: null,
  thumbnail: [],
};

export const albumDetailsReducer = (state, action) => {
  switch (action.type) {
    case Actions.API_CALL: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.SUCCESS: {
      const arr1 = action.data;
      const arr2 = action.user;
      const mergeArrays = (arr1 = [], arr2 = []) => {
        let res = [];
        res = arr1.map(obj => {
          const index = arr2.findIndex(el => el['id'] == obj['userId']);
          const {name} = index !== -1 ? arr2[index] : {};
          return {
            ...obj,
            name,
          };
        });
        return res;
      };
      const updatedArray = mergeArrays(arr1, arr2);

      return {
        ...state,
        loading: false,
        albumDetails: updatedArray,
      };
    }
    case Actions.API_CALL: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.GET_THUMBNAILS: {
      const images = action.data;
      const updated_array = images.filter(g => g.albumId == action.albumId);
      console.log(updated_array);
      return {
        ...state,
        loading: false,
        thumbnail: updated_array,
      };
    }
  }
};
