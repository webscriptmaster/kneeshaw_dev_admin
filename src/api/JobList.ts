import api from "./api";

export const apiGetJobList = () => api().get("/admin/job/list");

export const apiDeleteJob = (id: string) =>
  api().delete(`/admin/job/list/${id}`);
