import api from "./api";

export const apiGetJobDatabaseList = () => api().get("/admin/job/database");

export const apiCreateJobDatabase = (data: any) =>
  api().post("/admin/job/database", data);

export const apiUpdateJobDatabase = (id: string, data: any) =>
  api().put(`/admin/job/database/${id}`, data);

export const apiDeleteJobDatabase = (id: string) =>
  api().delete(`/admin/job/database/${id}`);
