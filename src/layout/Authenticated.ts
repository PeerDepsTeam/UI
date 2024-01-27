import {FC, PropsWithChildren, useEffect} from "react";
import {useAuthStore} from "@/useAuthStore.ts";
import {useNavigate} from "react-router-dom";

export const Authenticated: FC<PropsWithChildren> = ({children}) => {
  const {user} = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signup");
      return;
    }
  }, [navigate, user]);

  return user ? children : null;
};
