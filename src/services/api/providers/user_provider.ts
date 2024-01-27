import {AxiosResponse} from "axios";
import {Transaction, User} from "@/services/api/gen";
import {DataProvider, Query, userApi} from "@/services/api";
import {unimplemented} from "@/lib/noop.ts";

export interface UserProvider extends DataProvider<User> {
  getExpenses(
    uid: string,
    query?: Query
  ): Promise<AxiosResponse<Transaction[]>>;
}

export const UserProvider: UserProvider = {
  getById(id: string): Promise<AxiosResponse<User>> {
    return userApi().getUserById(id);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMany(_query): Promise<AxiosResponse<User[]>> {
    return userApi().getUsers();
  },

  getExpenses(
    uid: string,
    query: Query
  ): Promise<AxiosResponse<Transaction[]>> {
    return userApi().getExpenses(uid, query.page, query.pageSize);
  },

  crupdate(): Promise<AxiosResponse<User>> {
    return unimplemented();
  },

  crupdateById(): Promise<AxiosResponse<User>> {
    return unimplemented();
  },

  crupdateMany(): Promise<AxiosResponse<User[]>> {
    return unimplemented();
  },

  deleteById(): Promise<AxiosResponse<User>> {
    return unimplemented();
  },
};
