import api from "./api";

export const apiGetDataRequestList = () => api().get("/admin/data/request");

export const apiDeleteDataRequest = (id: string) =>
  api().delete(`/admin/data/request/${id}`);
