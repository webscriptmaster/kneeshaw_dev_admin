export const AUTHORIZATION_PREFIX = "Kneeshaw.Admin";

export const getLocalAccessToken = () =>
  localStorage.getItem("ksa_access_token") || "";

export const setLocalAccessToken = (newAccessToken: string) =>
  localStorage.setItem("ksa_access_token", newAccessToken);

export const removeLocalAccessToken = () =>
  localStorage.removeItem("ksa_access_token");

export const getLocalRefreshToken = () =>
  localStorage.getItem("ksa_refresh_token") || "";

export const setLocalRefreshToken = (newRefreshToken: string) =>
  localStorage.setItem("ksa_refresh_token", newRefreshToken);

export const removeLocalRefreshToken = () =>
  localStorage.removeItem("ksa_refresh_token");
