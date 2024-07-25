import api from "./api";

export const apiGetGameCategoryList = () => api().get("/admin/game/category");

export const apiCreateGameCategory = (data: any) =>
  api().post("/admin/game/category", data);

export const apiUpdateGameCategory = (id: string, data: any) =>
  api().put(`/admin/game/category/${id}`, data);

export const apiDeleteGameCategory = (id: string) =>
  api().delete(`/admin/game/category/${id}`);
