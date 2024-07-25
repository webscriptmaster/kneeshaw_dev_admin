import { toast } from "sonner";
import { create } from "zustand";

import { IJob } from "@/types/interfaces";
import { apiDeleteJob, apiGetJobList } from "@/api/JobList";

interface IJobListState {
  loading: boolean;
  jobs: IJob[];

  getListAction: () => void;
  deleteAction: (id: string, onSuccessCallback?: () => void) => void;
}

const useJobListStore = create<IJobListState>()((set) => ({
  loading: false,
  jobs: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobList();

      if (response && response.data) {
        set({ jobs: response.data.result });
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
      const response = await apiDeleteJob(id);

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

export default useJobListStore;
