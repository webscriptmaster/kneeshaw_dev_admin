import api from "./api";

export const apiGetBlogById = (id: string) =>
  api().get(`/admin/blog/list/${id}`);

export const apiGetBlogList = () => api().get("/admin/blog/list");

export const apiCreateBlog = (data: any) =>
  api().postForm("/admin/blog/list", data);

export const apiUpdateBlog = (id: string, data: any) =>
  api().putForm(`/admin/blog/list/${id}`, data);

export const apiDeleteBlog = (id: string) =>
  api().delete(`/admin/blog/list/${id}`);
