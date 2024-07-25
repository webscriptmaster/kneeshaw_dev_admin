import api from "./api";

export const apiGetJobPeriodList = () => api().get("/admin/job/period");

export const apiCreateJobPeriod = (data: any) =>
  api().post("/admin/job/period", data);

export const apiUpdateJobPeriod = (id: string, data: any) =>
  api().put(`/admin/job/period/${id}`, data);

export const apiDeleteJobPeriod = (id: string) =>
  api().delete(`/admin/job/period/${id}`);
