import {FC} from "react";
import {UserNav} from "@/layout/UserNav.tsx";
import logo from "../../src/assets/logo.png";
export const DefaultAppBar: FC = () => {
  // TODO: get user
  return (
    <div className="flex h-full items-center justify-between bg-white px-5">
      <div className="flex items-center justify-center">
        <span className="text-4xl tracking-tight text-purple-400">
          EDUC-FI .
        </span>
        <img src={logo} alt="logo" width="60" height="60" />
      </div>
      <UserNav />
    </div>
  );
};
