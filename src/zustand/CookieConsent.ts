import { toast } from "sonner";
import { create } from "zustand";

import { ICookieConsent } from "@/types/interfaces";
import {
  apiGetCookieConsent,
  apiUpdateCookieConsent
} from "@/api/CookieConsent";

interface ICookieConsentState {
  loading: boolean;
  cookieConsent: ICookieConsent | null;

  getAction: () => void;
  updateAction: (data: any, onSuccessCallback?: () => void) => void;
}

const useCookieConsentStore = create<ICookieConsentState>()((set) => ({
  loading: false,
  cookieConsent: null,

  getAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetCookieConsent();

      if (response && response.data) {
        set({ cookieConsent: response.data.result });
      }
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      set({ loading: false });
    }
  },

  updateAction: async (data: any, onSuccessCallback) => {
    try {
      set({ loading: true });
      const response = await apiUpdateCookieConsent(data);

      if (response && response.data) {
        toast.success(response.data.msg);

        if (typeof onSuccessCallback === "function") {
          onSuccessCallback();
        }
      }
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      set({ loading: false });
    }
  }
}));

export default useCookieConsentStore;
