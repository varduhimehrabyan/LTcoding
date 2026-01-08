"use server";
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function apiRequest(endpoint, method = "GET", data = null) {
  try {
    if (!process.env.API_URL) {
      console.error("API_URL is not defined in environment variables");
      return {
        success: false,
        error: "API configuration error",
      };
    }

    const config = {
      method,
      url: endpoint,
      ...(data && { data }),
    };

    const response = await apiClient.request(config);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("API Error:", error);

    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
      return {
        success: false,
        error:
          error.response.data?.message ||
          error.response.data?.error ||
          "API request failed",
      };
    } else if (error.request) {
      console.error("No response received:", error.request);
      return {
        success: false,
        error: "No response from server",
      };
    } else {
      console.error("Request setup error:", error.message);
      return {
        success: false,
        error: error.message || "Network error occurred",
      };
    }
  }
}
