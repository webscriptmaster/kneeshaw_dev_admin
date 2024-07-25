import { toast } from "sonner";
import { create } from "zustand";

import { IBlog } from "@/types/interfaces";
import {
  apiCreateBlog,
  apiDeleteBlog,
  apiGetBlogById,
  apiGetBlogList,
  apiUpdateBlog
} from "@/api/BlogList";

interface IBlogListState {
  loading: boolean;
  blogs: IBlog[];

  getAction: (id: string) => Promise<IBlog | null>;
  getListAction: () => void;
  createAction: (data: any, onSuccessCallback?: () => void) => void;
  updateAction: (id: string, data: any, onSuccessCallback?: () => void) => void;
  deleteAction: (id: string, onSuccessCallback?: () => void) => void;
}

const useBlogListStore = create<IBlogListState>()((set) => ({
  loading: false,
  blogs: [],

  getAction: async (id: string) => {
    try {
      set({ loading: true });
      const response = await apiGetBlogById(id);

      if (response && response.data) {
        return response.data.result as IBlog;
      }

      return null;
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

    return null;
  },

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetBlogList();

      if (response && response.data) {
        set({ blogs: response.data.result });
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
      const response = await apiCreateBlog(data);

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
      const response = await apiUpdateBlog(id, data);

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
      const response = await apiDeleteBlog(id);

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

export default useBlogListStore;
