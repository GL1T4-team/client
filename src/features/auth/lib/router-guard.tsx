import { Navigate, Outlet } from "react-router";
import { ROUTES } from "@/shared/constants";
import { useAuthStore } from "../model/store";

export const createGuard = (type: "auth" | "guest") => {
    return function Guard() {
        const { isAuthorized } = useAuthStore();

        if (type === "auth" && !isAuthorized) {
            return <Navigate to={ROUTES.AUTH} replace />;
        }

        if (type === "guest" && isAuthorized) {
            return <Navigate to={ROUTES.HOME} replace />;
        }

        return <Outlet />;
    };
};

export const AuthGuard = createGuard("auth");
export const GuestGuard = createGuard("guest");
