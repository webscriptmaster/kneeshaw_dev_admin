import api from "./api";

export const apiGetGamePlatformList = () => api().get("/admin/game/platform");

export const apiCreateGamePlatform = (data: any) =>
  api().post("/admin/game/platform", data);

export const apiUpdateGamePlatform = (id: string, data: any) =>
  api().put(`/admin/game/platform/${id}`, data);

export const apiDeleteGamePlatform = (id: string) =>
  api().delete(`/admin/game/platform/${id}`);
