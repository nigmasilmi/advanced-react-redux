import { SAVE_COMMENT } from "actions/types";
import { FETCH_COMMENTS } from "actions/types";
import { CHANGE_AUTH } from "actions/types";
import axios from "axios";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
  // uso de axios
  // retorna accion con payload resultado de la llamada a la api
};

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
};
