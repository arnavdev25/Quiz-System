import axios from "axios";

export const LOADING = "LOADING";
export const GET_DATA = "GET_DATA";
export const ERR = "ERR";
export const isLoading = () => ({
  type: LOADING,
});
export const isError = () => ({
  type: ERR,
});
export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
export const getQuizData = () => (dispatch) => {
  dispatch(isLoading());
  axios
    .get("https://quizsystemapp.herokuapp.com/quiz")
    .then((res) => {
        // console.log(res.data);
        dispatch(getData(res.data))
    })
    .catch((err) => dispatch(isError()));
};
