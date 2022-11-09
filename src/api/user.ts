import { userLogin } from "../models/auth";
import intance from "./intance";

export const getAllUser = () => {
    const url = `/users`;
    return intance.get(url);
}
export const getUser = (id : String) => {
    const url = `/users/${id}`;
    return intance.get(url);
}
export const deletelUser = (id : String) => {
    const url = `/users/${id}`;
    return intance.delete(url);
}

