import api from "./api";

export const apiGetFaqList = () => api().get("/admin/faq");

export const apiCreateFaq = (data: any) => api().post("/admin/faq", data);

export const apiUpdateFaq = (id: string, data: any) =>
  api().put(`/admin/faq/${id}`, data);

export const apiDeleteFaq = (id: string) => api().delete(`/admin/faq/${id}`);
