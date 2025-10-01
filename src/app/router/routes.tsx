import { createBrowserRouter } from "react-router";
import { ROUTES } from "@/shared/constants";
import MainContainer from "@/shared/components/main-container/main-container";
import DashboardPage from "@/pages/dashboard-page/dashboard-page";
import CreateReportPage from "@/pages/create-report-page/create-report-page";
import UploadsPage from "@/pages/uploads-page/uploads-page";
import SettingsPage from "@/pages/settings-page/settings-page";
import AuthPage from "@/pages/auth-page/ui/auth-page.tsx";

const routes = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainContainer />,
        children: [
            { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
            { path: ROUTES.CREATE_REPORT, element: <CreateReportPage /> },
            { path: ROUTES.UPLOADS, element: <UploadsPage /> },
            { path: ROUTES.SETTINGS, element: <SettingsPage /> },
        ],
    },
    {
        path: ROUTES.AUTH,
        element: <AuthPage />,
    },
]);

export default routes;
