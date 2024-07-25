import { toast } from "sonner";
import { create } from "zustand";

import { IService } from "@/types/interfaces";
import {
  apiCreateService,
  apiDeleteService,
  apiGetServiceList,
  apiUpdateService
} from "@/api/Service";

interface IServiceState {
  loading: boolean;
  services: IService[];

  getListAction: () => void;
  createAction: (data: any, onSuccessCallback?: () => void) => void;
  updateAction: (id: string, data: any, onSuccessCallback?: () => void) => void;
  deleteAction: (id: string, onSuccessCallback?: () => void) => void;
}

const useServiceStore = create<IServiceState>()((set) => ({
  loading: false,
  services: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetServiceList();

      if (response && response.data) {
        set({ services: response.data.result });
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

  createAction: async (data: any, onSuccessCallback) => {
    try {
      set({ loading: true });
      const response = await apiCreateService(data);

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
  },

  updateAction: async (id: string, data: any, onSuccessCallback) => {
    try {
      set({ loading: true });
      const response = await apiUpdateService(id, data);

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
  },

  deleteAction: async (id: string, onSuccessCallback) => {
    try {
      set({ loading: true });
      const response = await apiDeleteService(id);

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

export default useServiceStore;
