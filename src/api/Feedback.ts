import api from "./api";

export const apiGetFeedbackList = () => api().get("/admin/feedback");

export const apiCreateFeedback = (data: any) =>
  api().post("/admin/feedback", data);

export const apiUpdateFeedback = (id: string, data: any) =>
  api().put(`/admin/feedback/${id}`, data);

export const apiDeleteFeedback = (id: string) =>
  api().delete(`/admin/feedback/${id}`);
