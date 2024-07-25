import { toast } from "sonner";
import { create } from "zustand";

import { IJobScope } from "@/types/interfaces";
import {
  apiCreateJobScope,
  apiDeleteJobScope,
  apiGetJobScopeList,
  apiUpdateJobScope
} from "@/api/JobScope";

interface IJobScopeState {
  loading: boolean;
  jobScopes: IJobScope[];

  getListAction: () => void;
  createAction: (data: any, onSuccessCallback?: () => void) => void;
  updateAction: (id: string, data: any, onSuccessCallback?: () => void) => void;
  deleteAction: (id: string, onSuccessCallback?: () => void) => void;
}

const useJobScopeStore = create<IJobScopeState>()((set) => ({
  loading: false,
  jobScopes: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobScopeList();

      if (response && response.data) {
        set({ jobScopes: response.data.result });
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
      const response = await apiCreateJobScope(data);

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
      const response = await apiUpdateJobScope(id, data);

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
      const response = await apiDeleteJobScope(id);

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

export default useJobScopeStore;
