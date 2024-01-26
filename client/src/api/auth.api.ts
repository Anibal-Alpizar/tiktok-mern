import { client } from "./axios";

export const loginRequest = (formData: FormData) =>
  client.post("/signin", formData);

export const registerRequest = (formData: FormData) =>
  client.post("/signup", formData);

export const logoutRequest = () => client.get("/logout");

export const meRequest = () => client.get("/me");
