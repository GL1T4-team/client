import { Outlet, useLocation } from "react-router";
import { Container, Title } from "./styles";
import { ROUTES } from "@/shared/constants";

const TITLES: Record<string, string> = {
    [ROUTES.DASHBOARD]: "Дашборд",
    [ROUTES.CREATE_REPORT]: "Создать отчет",
    [ROUTES.UPLOADS]: "Загрузки",
    [ROUTES.SETTINGS]: "Настройки",
};

const ContentArea = () => {
    const location = useLocation();
    const title = TITLES[location.pathname] || "Главная";

    return (
        <Container>
            <Title>{title}</Title>
            <Outlet />
        </Container>
    );
};

export default ContentArea;
