import { ROUTES } from "@/shared/constants";
import {
    Container,
    User,
    NavList,
    NavListItem,
    NavListItemLink,
} from "./styles";

const Sidebar = () => {
    return (
        <Container>
            <User>
                <h3>A.И. Иванов</h3>
                <p>Администратор</p>
            </User>
            <NavList>
                <NavListItem>
                    <NavListItemLink to={ROUTES.DASHBOARD}>
                        Дашборд
                    </NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink to={ROUTES.CREATE_REPORT}>
                        Создать отчет
                    </NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink to={ROUTES.UPLOADS}>
                        Загрузки
                    </NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink to={ROUTES.SETTINGS}>
                        Настройки
                    </NavListItemLink>
                </NavListItem>
            </NavList>
        </Container>
    );
};

export default Sidebar;
