export const initialState = {
  term: null, 
  // darkMode: false
}

export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  // SET_DARK_MODE: 'SET_DARK_MODE',
}

// reducer listens for dispatched actions
const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    // case actionTypes.SET_DARK_MODE:
    //   return {
    //     ...state,
    //     darkMode: action.darkMode,
    //   };

    default:
      return state;
  }
}

export default reducer;