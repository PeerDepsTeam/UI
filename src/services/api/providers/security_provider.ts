import axios, {AxiosResponse} from "axios";
import {User} from "@/services/api/gen";
import {securityApi} from "@/services/api";
import {BASE_PATH} from "@/services/api/gen/base.ts";

export interface SecurityProvider {
  signIn(): Promise<AxiosResponse<User>>;
  signUp(user: User): Promise<AxiosResponse<User>>;
}

export const SecurityProvider: SecurityProvider = {
  signIn(): Promise<AxiosResponse<User>> {
    return securityApi().signin();
  },

  signUp(user: User): Promise<AxiosResponse<User>> {
    // return securityApi().signup(user, {
    // /!\ weird issue, so use "GET" instead of "POST"
    // method: "GET",
    // url: "/auth",
    // });
    // FIXME: weird behaviour!
    return axios.get(`${BASE_PATH}/auth`, {
      params: {
        auth: JSON.stringify(user),
      },
    });
  },
};
