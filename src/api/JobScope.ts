import api from "./api";

export const apiGetJobScopeList = () => api().get("/admin/job/scope");

export const apiCreateJobScope = (data: any) =>
  api().post("/admin/job/scope", data);

export const apiUpdateJobScope = (id: string, data: any) =>
  api().put(`/admin/job/scope/${id}`, data);

export const apiDeleteJobScope = (id: string) =>
  api().delete(`/admin/job/scope/${id}`);
