import {FC, PropsWithChildren, ReactNode} from "react";
import {clsx} from "clsx";
import {HEADER_HEIGHT, MAIN_HEIGHT} from "@/layout/constants.ts";
import {DefaultAppBar} from "@/layout/DefaultAppBar.tsx";
import {Nav} from "@/layout/Nav.tsx";
import {HomeIcon} from "@/components/icon/HomeIcon";
import {UserIcon} from "@/components/icon/UserIcon";
import {BookIcon} from "@/components/icon/BookIcon";
import {DashboardIcon} from "@/components/icon/DashboardIcon";

export interface LayoutProps {
  header?: ReactNode;
  // main contents
  children: ReactNode;
}

const HeaderWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      className={clsx("fixed left-0 top-0 mb-[0.5rem] w-full ", HEADER_HEIGHT)}
    >
      {children}
    </div>
  );
};

const MainWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      className="mt-[5rem] flex"
      style={{
        height: MAIN_HEIGHT,
      }}
    >
      <div className="bg-white-50 w-1/6 ">
        <Nav
          isCollapsed={false}
          links={[
            {
              title: "Home",
              icon: HomeIcon,
              to: "/",
              variant: "default",
            },
            {
              title: "Dashboard",
              icon: DashboardIcon,
              to: "/dashboard",
              variant: "default",
            },
            {
              title: "Profile",
              icon: UserIcon,
              to: "/profile",
              variant: "default",
            },
            {
              title: "Course",
              icon: BookIcon,
              to: "/courses",
              variant: "default",
            },
          ]}
        />
      </div>

      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export const Layout: FC<LayoutProps> = ({
  children,
  header = <DefaultAppBar />,
}) => {
  return (
    <>
      <HeaderWrapper>{header}</HeaderWrapper>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};
