import {FC, PropsWithChildren, ReactNode} from "react";
import {clsx} from "clsx";
import {HEADER_HEIGHT, MAIN_HEIGHT} from "@/layout/constants.ts";
import {DefaultAppBar} from "@/layout/DefaultAppBar.tsx";

export interface LayoutProps {
  header?: ReactNode;
  // main content
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
      className="mt-[5rem] py-[1.5rem]"
      style={{
        height: MAIN_HEIGHT,
      }}
    >
      {children}
    </div>
  );
};

export const Layout: FC<LayoutProps> = ({
  children,
  header = <DefaultAppBar />,
}) => {
  return (
    <div className="h-screen">
      <HeaderWrapper>{header}</HeaderWrapper>
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};
