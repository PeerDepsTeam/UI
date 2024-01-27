import {AxiosResponse} from "axios";
import {Transaction} from "@/services/api/gen";
import {activityApi, DataProvider} from "@/services/api";
import {unimplemented} from "@/lib/noop.ts";

export type ActivityProvider = DataProvider<Transaction>;

export const ActivityProvider: ActivityProvider = {
  getMany(query): Promise<AxiosResponse<Transaction[]>> {
    return activityApi().getCourses(query.page, query.pageSize);
  },

  getById(): Promise<AxiosResponse<Transaction>> {
    return unimplemented();
  },

  crupdate(): Promise<AxiosResponse<Transaction>> {
    return unimplemented();
  },

  crupdateById(): Promise<AxiosResponse<Transaction>> {
    return unimplemented();
  },

  crupdateMany(): Promise<AxiosResponse<Transaction[]>> {
    return unimplemented();
  },

  deleteById(): Promise<AxiosResponse<Transaction>> {
    return unimplemented();
  },
};
