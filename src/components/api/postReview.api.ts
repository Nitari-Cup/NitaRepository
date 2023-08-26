import axios from "axios";

export const postReview = (body: object) => {
  return axios.post("https://nitari-api.onrender.com/postReview", body);
};
