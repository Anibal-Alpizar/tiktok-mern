import axios, { AxiosInstance } from "axios";
import { HTTP } from "../constants";

export const client: AxiosInstance = axios.create({
  baseURL: HTTP.API_URL,
});
