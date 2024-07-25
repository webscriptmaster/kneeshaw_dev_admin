import api from "./api";

export const apiGetTeamMemberList = () => api().get("/admin/team/member");

export const apiCreateTeamMember = (data: any) =>
  api().postForm("/admin/team/member", data);

export const apiUpdateTeamMember = (id: string, data: any) =>
  api().putForm(`/admin/team/member/${id}`, data);

export const apiDeleteTeamMember = (id: string) =>
  api().delete(`/admin/team/member/${id}`);
