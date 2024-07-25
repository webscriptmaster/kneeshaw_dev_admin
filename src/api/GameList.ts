import api from "./api";

export const apiGetGameById = (id: string) =>
  api().get(`/admin/game/list/${id}`);

export const apiGetGameList = () => api().get("/admin/game/list");

export const apiCreateGame = (data: any) =>
  api().postForm("/admin/game/list", data);

export const apiUpdateGame = (id: string, data: any) =>
  api().putForm(`/admin/game/list/${id}`, data);

export const apiDeleteGame = (id: string) =>
  api().delete(`/admin/game/list/${id}`);
