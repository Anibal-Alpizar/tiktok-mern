import { client } from "./axios";

export const uploadVideoRequest = (formData: FormData) =>
  client.post("/upload", formData);

export const getVideosRequest = () => client.get("/");
