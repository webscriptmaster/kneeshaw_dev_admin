import api from "./api";

export const apiGetDashboardStatistics = () =>
  api().get("/admin/dashboard/statistics");
