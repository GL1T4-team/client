import { Outlet } from "react-router";
import { Container, Title } from "./styles";

const ContentArea = () => {
    return (
        <Container>
            <Title>Дашборд</Title>
            <Outlet />
        </Container>
    );
};

export default ContentArea;
