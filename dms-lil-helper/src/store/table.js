const INIT_DATA = "table/INIT_DATA";
const ADD_CHAR = "table/ADD_CHAR";
const ERROR = "table/ERROR";

export const initialState = {
  error: "",
  characters: "",
};

const table = (state = initialState, action) => {
  switch (action.type) {
    case INIT_DATA: {
      console.log(state);
      return {
        ...state,
        characters: "hello",
      };
    }
    case ADD_CHAR: {
      return {
        ...state,
        characters: "hello world",
      };
    }

    case ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const init = () => (dispatch) => {
  dispatch(initData("hello"));
  dispatch(addChar("hello world"));

  // dispatch(setError(error.message));
};

const initData = (data) => (dispatch) => dispatch({ data, type: INIT_DATA });

const addChar = (payload) => ({
  payload,
  type: ADD_CHAR,
});

const setError = (payload) => ({
  payload,
  type: ERROR,
});

export default table;
