import {AxiosResponse} from "axios";
import {User} from "@/services/api/gen";
import {securityApi} from "@/services/api";

export interface SecurityProvider {
  signIn(): Promise<AxiosResponse<User>>;
  signUp(user: User): Promise<AxiosResponse<User>>;
}

export const SecurityProvider: SecurityProvider = {
  signIn(): Promise<AxiosResponse<User>> {
    return securityApi().signin();
  },

  signUp(user: User): Promise<AxiosResponse<User>> {
    return securityApi().signup(user);
  },
};
