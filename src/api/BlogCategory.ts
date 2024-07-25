import api from "./api";

export const apiGetBlogCategoryList = () => api().get("/admin/blog/category");

export const apiCreateBlogCategory = (data: any) =>
  api().post("/admin/blog/category", data);

export const apiUpdateBlogCategory = (id: string, data: any) =>
  api().put(`/admin/blog/category/${id}`, data);

export const apiDeleteBlogCategory = (id: string) =>
  api().delete(`/admin/blog/category/${id}`);
