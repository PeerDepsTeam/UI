import {FC} from "react";
import {UserNav} from "@/layout/UserNav.tsx";

export const DefaultAppBar: FC = () => {
  // TODO: get user
  return (
    <div className="flex h-full items-center justify-between bg-white px-5">
      <span className="text-4xl tracking-tight">LOGO</span>
      <UserNav />
    </div>
  );
};
