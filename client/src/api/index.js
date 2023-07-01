import axios from "axios";

const url = "http://localhost:5000";

export const passingToBackend = (value) => {
  return axios.post(url, { value });
};
