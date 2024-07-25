import api from "./api";

// Login
export const apiLogin = (data: any) => api().post("/admin/auth/login", data);

// Logout
export const apiLogout = () => api().post("/admin/auth/logout");
