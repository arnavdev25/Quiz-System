import { GET_LOGIN_SUCCESS, LOGOUT } from "./action";
const initState = {
  isAuth: false,
  userData: {},
};
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: action.payload,
        userData: action.userData,
      };
      case LOGOUT:
        return {
          ...state,
          isAuth:false,
          token:"",
          userData:{}
        }
    default:
      return state;
  }
};
