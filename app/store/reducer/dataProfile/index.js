const initialState = {
  dataProfile: null,
};

function data(state = initialState, action) {
  switch (action.type) {
    case "@APP/SAVE/PROFILE":
      return {
        ...state,
        dataProfile: action.payload,
      };
  }
  return state;
}

export default data;
