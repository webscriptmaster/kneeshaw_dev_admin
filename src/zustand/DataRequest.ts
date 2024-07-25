import { toast } from "sonner";
import { create } from "zustand";

import { IDataRequest } from "@/types/interfaces";
import { apiDeleteDataRequest, apiGetDataRequestList } from "@/api/DataRequest";

interface IDataRequestState {
  loading: boolean;
  dataRequests: IDataRequest[];

  getListAction: () => void;
  deleteAction: (id: string, onSuccessCallback?: () => void) => void;
}

const useDataRequestStore = create<IDataRequestState>()((set) => ({
  loading: false,
  dataRequests: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetDataRequestList();

      if (response && response.data) {
        set({ dataRequests: response.data.result });
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
      const response = await apiDeleteDataRequest(id);

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

export default useDataRequestStore;
