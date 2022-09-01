import axios from "axios";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const LOGOUT="LOGOUT"
export const userLoginSuccess = (payload) => ({
  type: GET_LOGIN_SUCCESS,
  payload: payload.token,
  userData: payload.user,
});
export const logoutUser=()=>({
  type:LOGOUT
})
export const getLoginToken = (payload) => (dispatch) => {
  axios
    .post("https://quizsystemapp.herokuapp.com/user/login", payload)
    .then((res) => {
      if (!res.data.error) {
        // console.log(res);
        dispatch(userLoginSuccess(res.data));
      }
    })
    .catch((err) => {
      alert(err.response.data.error);
    });
};
