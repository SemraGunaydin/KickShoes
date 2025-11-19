 // axios.ts
import axios from "axios";
import type { AuthResponse } from "../types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // <== Bu olmalı
  headers: {
    "Content-Type": "application/json",
  },
});

// This middleware runs after every API response.
// If the API returns a 401 Unauthorized caused by an expired access token,
// we automatically request a new access token using the refresh token,
// then retry the original failed request.

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Middleware caught an error:", error);

    const originalRequest = error.config;

    // Check: access token expired AND request has not been retried before
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      error.response?.data?.message === "Access token expired"
    ) {
      originalRequest._retry = true;

      try {
        // Request a new access token
        const res = await api.post<AuthResponse>("/auth/refresh");
        console.log("Access token refreshed:", res);

        // Retry original request with the new token
        return api(originalRequest);
      } catch (refreshError) {
        console.log("Refresh token failed:", refreshError);

        // If refresh token is also expired → logout user
        try {
          await api.post("/auth/logout");
        } catch (logoutError) {
          console.log("Logout failed:", logoutError);
        }

        // Redirect to login page
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    // Return any other error normally
    return Promise.reject(error);
  }
);

export default api;