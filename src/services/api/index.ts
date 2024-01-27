import {HealthApi, UserApi, ActivityApi, SecurityApi} from "@/services/api/gen";
import {AuthProvider} from "@/services/security";

export const healthApi = () => new HealthApi(AuthProvider.getCachedAuthConf());
export const userApi = () => new UserApi(AuthProvider.getCachedAuthConf());
export const activityApi = () =>
  new ActivityApi(AuthProvider.getCachedAuthConf());
export const securityApi = () =>
  new SecurityApi(AuthProvider.getCachedAuthConf());

export * from "./providers";
