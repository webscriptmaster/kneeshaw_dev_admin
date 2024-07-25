import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { IUser } from "@/types/interfaces";
import { apiLogin, apiLogout } from "@/api/Auth";
import {
  removeLocalAccessToken,
  removeLocalRefreshToken,
  setLocalAccessToken,
  setLocalRefreshToken
} from "@/lib/auth";

interface IAuthState {
  hasHydrated: boolean;
  loading: boolean;
  user: IUser | null;

  setHasHydrated: (payload: boolean) => void;

  loginAction: (data: any, onSuccessCallback: () => void) => void;
  logoutAction: (onSuccessCallback: () => void) => void;
}

const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      loading: false,
      user: null,

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),

      loginAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiLogin(data);

          if (response && response.data) {
            const { user, accessToken, refreshToken, msg } = response.data;
            setLocalAccessToken(accessToken);
            setLocalRefreshToken(refreshToken);
            set({ user });
            toast.success(msg);
            onSuccessCallback();
          }
        } catch (err: any) {
          console.error(err);
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.msg
          ) {
            toast.error(err.response.data.msg);
          } else {
            toast.error("Something went wrong. Please try again later.");
          }
        } finally {
          set({ loading: false });
        }
      },

      logoutAction: async (onSuccessCallback) => {
        try {
          set({ loading: true });
          await apiLogout();
          removeLocalAccessToken();
          removeLocalRefreshToken();
          set({ user: null });
          onSuccessCallback();
        } catch (err: any) {
          console.error(err);
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.msg
          ) {
            toast.error(err.response.data.msg);
          } else {
            toast.error("Something went wrong. Please try again later.");
          }
        } finally {
          set({ loading: false });
        }
      }
    }),
    {
      name: "ksa-auth",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useAuthStore;
