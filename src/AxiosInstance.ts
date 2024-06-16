import axios from "axios";
// import { setLoading } from "./shared/components/Loading/LoadingSlice";
// import { store } from "./store";

const instance = axios.create({
  baseURL: "http://localhost:3333",
});

instance.interceptors.request.use(
  (config) => {
    // store.dispatch(setLoading(true));
    return config;
  },
  (error) => {
    // store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // store.dispatch(setLoading(false));
    return response;
  },
  (error) => {
    // store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);

export { instance };
