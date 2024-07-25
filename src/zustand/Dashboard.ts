import { toast } from "sonner";
import { create } from "zustand";

import { apiGetDashboardStatistics } from "@/api/Dashboard";

interface IDashboardState {
  loading: boolean;
  dashboard: any;

  getStatisticsAction: () => void;
}

const useDashboardStore = create<IDashboardState>()((set) => ({
  loading: false,
  dashboard: {},

  getStatisticsAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetDashboardStatistics();

      if (response && response.data) {
        set({ dashboard: response.data.result });
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

export default useDashboardStore;
