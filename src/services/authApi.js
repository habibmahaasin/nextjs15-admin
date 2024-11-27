import { handleApiRequest } from "./base/handeApiRequest";

export function login({ data }) {
  return handleApiRequest("post", `/login`, data);
}
