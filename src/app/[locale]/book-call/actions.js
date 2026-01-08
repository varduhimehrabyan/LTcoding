"use server";
import axios from "axios";

export async function submitBooking(payload) {
  try {
    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
      console.error("API_URL is not defined in environment variables");
      return {
        success: false,
        error: "API configuration error",
      };
    }

    const fullUrl = `${apiUrl}/book_a_call`;

    const response = await axios.post(fullUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Server Action Error:", error);

    // Axios wraps API errors in error.response
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error:", error.response.status, error.response.data);
      return {
        success: false,
        error:
          error.response.data?.message ||
          error.response.data?.error ||
          "Failed to book call",
      };
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
      return {
        success: false,
        error: "No response from server",
      };
    } else {
      // Something happened in setting up the request
      console.error("Request setup error:", error.message);
      return {
        success: false,
        error: error.message || "Network error occurred",
      };
    }
  }
}
