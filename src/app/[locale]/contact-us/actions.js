"use server";
import { apiRequest } from "@/lib/apiClient";

export async function submitContact(payload) {
  return await apiRequest("/contact_us", "POST", payload);
}
