import api from "./api";

export const apiGetJobSkillList = () => api().get("/admin/job/skill");

export const apiCreateJobSkill = (data: any) =>
  api().post("/admin/job/skill", data);

export const apiUpdateJobSkill = (id: string, data: any) =>
  api().put(`/admin/job/skill/${id}`, data);

export const apiDeleteJobSkill = (id: string) =>
  api().delete(`/admin/job/skill/${id}`);
