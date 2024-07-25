import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { THEME_MODE } from "@/utils/constants";

interface IThemeState {
  hasHydrated: boolean;
  loading: boolean;
  mode: string;

  setHasHydrated: (payload: boolean) => void;
  setMode: (payload: string) => void;
}

const useThemeStore = create<IThemeState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      loading: false,
      mode: THEME_MODE.DARK,

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),
      setMode: (payload: string) =>
        set({
          mode: payload
        })
    }),
    {
      name: "ksa-theme",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useThemeStore;
