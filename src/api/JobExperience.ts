import api from "./api";

export const apiGetJobExperienceList = () => api().get("/admin/job/experience");

export const apiCreateJobExperience = (data: any) =>
  api().post("/admin/job/experience", data);

export const apiUpdateJobExperience = (id: string, data: any) =>
  api().put(`/admin/job/experience/${id}`, data);

export const apiDeleteJobExperience = (id: string) =>
  api().delete(`/admin/job/experience/${id}`);
