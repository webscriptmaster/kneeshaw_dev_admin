import api from "./api";

export const apiGetCookieConsent = () => api().get("/admin/cookie/consent");

export const apiUpdateCookieConsent = (data: any) =>
  api().put(`/admin/cookie/consent`, data);
