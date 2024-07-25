import api from "./api";

export const apiGetServiceList = () => api().get("/admin/service");

export const apiCreateService = (data: any) =>
  api().postForm("/admin/service", data);

export const apiUpdateService = (id: string, data: any) =>
  api().putForm(`/admin/service/${id}`, data);

export const apiDeleteService = (id: string) =>
  api().delete(`/admin/service/${id}`);
