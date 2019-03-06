import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS } from "../actions";

const initialState = {
  characters: null,
  isLoading: false,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        error: '',
        isLoading: true,
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        characters: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
};
