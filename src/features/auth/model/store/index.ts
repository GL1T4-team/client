import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../../api";

interface User {
    id: number;
    email: string;
    username: string;
    role: string;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthorized: boolean;

    login: (email: string, password: string) => Promise<void>;
    refreshAccessToken: () => Promise<void>;
    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            isAuthorized: false,

            login: async (email, password) => {
                const res = await api.post("/auth/login", { email, password });
                set({
                    accessToken: res.data.accessToken,
                    user: res.data.user,
                    isAuthorized: true,
                });
            },

            refreshAccessToken: async () => {
                const res = await api.post("/auth/refresh");
                set({
                    accessToken: res.data.accessToken,
                    user: res.data.user,
                    isAuthorized: true,
                });
            },

            logout: async () => {
                await api.post("/auth/logout");
                set({ accessToken: null, user: null, isAuthorized: false });
            },
        }),
        { name: "auth-storage" }
    )
);
