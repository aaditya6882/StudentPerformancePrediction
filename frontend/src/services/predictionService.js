import api from "./api";

export const getPrediction = async (data) => {
  return await api.post("/prediction", data);
};
