import { toast } from "sonner";
import { create } from "zustand";

import { IJobBudget } from "@/types/interfaces";
import { apiGetJobBudget, apiUpdateJobBudget } from "@/api/JobBudget";

interface IJobBudgetState {
  loading: boolean;
  jobBudget: IJobBudget | null;

  getAction: () => void;
  updateAction: (data: any, onSuccessCallback?: () => void) => void;
}

const useJobBudgetStore = create<IJobBudgetState>()((set) => ({
  loading: false,
  jobBudget: null,

  getAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobBudget();

      if (response && response.data) {
        set({ jobBudget: response.data.result });
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
      const response = await apiUpdateJobBudget(data);

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

export default useJobBudgetStore;
