export const API_CONFIG = {
  baseUrl: "https://me.kixstar.xyz/api",
  endpoints: {
    contact: "/contact/message",
    stats: {
      get: "/stats",
      update: "/stats",
    },
  },
} as const;

export interface StatsResponse {
  views: number;
  likes: number;
}

export type StatsUpdateType = "view" | "like";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
