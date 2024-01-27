import {AxiosResponse} from "axios";
import {Course} from "@/services/api/gen";
import {activityApi, DataProvider} from "@/services/api";
import {unimplemented} from "@/lib/noop.ts";

export type ActivityProvider = DataProvider<Course>;

export const ActivityProvider: ActivityProvider = {
  getMany(query): Promise<AxiosResponse<Course[]>> {
    return activityApi().getCourses(query.page, query.pageSize);
  },

  getById(): Promise<AxiosResponse<Course>> {
    return unimplemented();
  },

  crupdate(): Promise<AxiosResponse<Course>> {
    return unimplemented();
  },

  crupdateById(): Promise<AxiosResponse<Course>> {
    return unimplemented();
  },

  crupdateMany(): Promise<AxiosResponse<Course[]>> {
    return unimplemented();
  },

  deleteById(): Promise<AxiosResponse<Course>> {
    return unimplemented();
  },
};
