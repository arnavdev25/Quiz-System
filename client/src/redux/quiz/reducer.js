import { ERR, GET_DATA, LOADING } from "./action";
const iniState = {
  loading: false,
  error: false,
  quiz: [],
};

export const quizReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_DATA:
      return {
        ...state,
        loading:false,
        quiz: payload,
      };
    default:
      return state;
  }
};
