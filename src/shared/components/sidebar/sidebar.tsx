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
                    <NavListItemLink>Дашборд</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink>Создать отчет</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink>Загрузки</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink>Настройки</NavListItemLink>
                </NavListItem>
            </NavList>
        </Container>
    );
};

export default Sidebar;
