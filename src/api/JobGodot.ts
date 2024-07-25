import api from "./api";

export const apiGetJobGodotList = () => api().get("/admin/job/godot");

export const apiCreateJobGodot = (data: any) =>
  api().post("/admin/job/godot", data);

export const apiUpdateJobGodot = (id: string, data: any) =>
  api().put(`/admin/job/godot/${id}`, data);

export const apiDeleteJobGodot = (id: string) =>
  api().delete(`/admin/job/godot/${id}`);
