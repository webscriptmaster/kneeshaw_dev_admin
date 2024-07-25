import { toast } from "sonner";
import { create } from "zustand";

import { IBlogCategory } from "@/types/interfaces";
import {
  apiCreateBlogCategory,
  apiDeleteBlogCategory,
  apiGetBlogCategoryList,
  apiUpdateBlogCategory
} from "@/api/BlogCategory";

interface IBlogCategoryState {
  loading: boolean;
  blogCategories: IBlogCategory[];

  getListAction: () => void;
  createAction: (data: any, onSuccessCallback?: () => void) => void;
  updateAction: (id: string, data: any, onSuccessCallback?: () => void) => void;
  deleteAction: (id: string, onSuccessCallback?: () => void) => void;
}

const useBlogCategoryStore = create<IBlogCategoryState>()((set) => ({
  loading: false,
  blogCategories: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetBlogCategoryList();

      if (response && response.data) {
        set({ blogCategories: response.data.result });
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
      const response = await apiCreateBlogCategory(data);

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
      const response = await apiUpdateBlogCategory(id, data);

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
      const response = await apiDeleteBlogCategory(id);

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

export default useBlogCategoryStore;
