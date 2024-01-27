import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {User} from "@/services/api/gen";

export interface AuthStore {
  user: User | null;
  setUser(user: User | null): void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => {
      return {
        user: null,
        setUser(user: User | null) {
          set({user});
        },
      };
    },
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
