import {FC, PropsWithChildren, ReactNode} from "react";
import {LayoutDashboard} from "lucide-react";
import {clsx} from "clsx";
import {HEADER_HEIGHT, MAIN_HEIGHT} from "@/layout/constants.ts";
import {DefaultAppBar} from "@/layout/DefaultAppBar.tsx";
import {Nav} from "@/layout/Nav.tsx";

export interface LayoutProps {
  header?: ReactNode;
  // main contents
  children: ReactNode;
}

const HeaderWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      className={clsx("fixed left-0 top-0 mb-[0.5rem] w-full", HEADER_HEIGHT)}
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
      <div className="bg-black-20 w-1/4">
        <Nav
          isCollapsed={false}
          links={[
            {
              title: "Dashboard",
              icon: LayoutDashboard,
              to: "/dashboard",
              variant: "default",
            },
            {
              title: "Profile",
              icon: LayoutDashboard,
              to: "/profile",
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
