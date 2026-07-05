import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const makeCall = async (phoneNumber) => {
  const response = await API.post("/call", {
    to_number: phoneNumber,
  });

  return response.data;
};
