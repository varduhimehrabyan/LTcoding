"use server";
import { apiRequest } from "@/lib/apiClient";

export async function submitBooking(payload) {
  return await apiRequest("/book_a_call", "POST", payload);
}
