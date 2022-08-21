import {request} from "./Methods";

export const signIn = async (params) => await request(params, 'post');