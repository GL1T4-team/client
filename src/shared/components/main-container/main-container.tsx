import ContentArea from "../../../widgets/content-area/content-area";
import Sidebar from "../../../widgets/sidebar/sidebar";
import { Container } from "./styles";

const MainContainer = () => {
    return (
        <Container>
            <Sidebar />
            <ContentArea />
        </Container>
    );
};

export default MainContainer;
