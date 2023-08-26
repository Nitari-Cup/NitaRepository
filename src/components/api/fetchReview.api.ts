import axios from "axios";

export const fetchReview= () => {
  return axios.get("https://nitari-api.onrender.com/fetchReview");
};
