import api from "./api";

export const apiGetUserById = (id: string) => api().get(`/admin/user/${id}`);

export const apiGetUserList = () => api().get("/admin/user");

export const apiUpdateUser = (id: string, data: any) =>
  api().putForm(`/admin/user/${id}`, data);

export const apiDeleteUser = (id: string) => api().delete(`/admin/user/${id}`);
