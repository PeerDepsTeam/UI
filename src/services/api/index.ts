import {HealthApi, UserApi, ActivityApi, SecurityApi} from "@/services/api/gen";

export const healthApi = () => new HealthApi();
export const userApi = () => new UserApi();
export const activityApi = () => new ActivityApi();
export const securityApi = () => new SecurityApi();

export * from "./providers";
