const initialState = {
  loading: false,
  error: null,
  user: [],
  page: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_PAGES":
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
}
