import api from "./api";

export const apiGetCommunityJoinerList = () =>
  api().get("/admin/community/joiner");

export const apiCreateCommunityJoiner = (data: any) =>
  api().post("/admin/community/joiner", data);

export const apiUpdateCommunityJoiner = (id: string, data: any) =>
  api().put(`/admin/community/joiner/${id}`, data);

export const apiDeleteCommunityJoiner = (id: string) =>
  api().delete(`/admin/community/joiner/${id}`);
