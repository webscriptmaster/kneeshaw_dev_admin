import { toast } from "sonner";
import { create } from "zustand";

import { IJobExperience } from "@/types/interfaces";
import {
  apiCreateJobExperience,
  apiDeleteJobExperience,
  apiGetJobExperienceList,
  apiUpdateJobExperience
} from "@/api/JobExperience";

interface IJobExperienceState {
  loading: boolean;
  jobExperiences: IJobExperience[];

  getListAction: () => void;
  createAction: (data: any, onSuccessCallback?: () => void) => void;
  updateAction: (id: string, data: any, onSuccessCallback?: () => void) => void;
  deleteAction: (id: string, onSuccessCallback?: () => void) => void;
}

const useJobExperienceStore = create<IJobExperienceState>()((set) => ({
  loading: false,
  jobExperiences: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobExperienceList();

      if (response && response.data) {
        set({ jobExperiences: response.data.result });
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
      const response = await apiCreateJobExperience(data);

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
      const response = await apiUpdateJobExperience(id, data);

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
      const response = await apiDeleteJobExperience(id);

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

export default useJobExperienceStore;
