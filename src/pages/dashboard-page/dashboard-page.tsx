import { Container, Widget } from "./style";

const DashboardPage = () => {
    return <Container>
        <Widget>
            Средняя длительность полета
        </Widget>
        <Widget>
            Число полетов
        </Widget>
        <Widget>
            Топ-10 регионов
        </Widget>
        <Widget>
            Карта
        </Widget>
    </Container>;
};

export default DashboardPage;
