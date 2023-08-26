import axios from "axios";

export const fetchQuestion = () => {
  return axios.get("https://nitari-api.onrender.com/fetchQuestion");
};
