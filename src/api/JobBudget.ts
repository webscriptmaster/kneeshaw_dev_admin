import api from "./api";

export const apiGetJobBudget = () => api().get("/admin/job/budget");

export const apiUpdateJobBudget = (data: any) =>
  api().put(`/admin/job/budget`, data);
