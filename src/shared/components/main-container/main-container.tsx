import ContentArea from "../content-area/content-area";
import Sidebar from "../sidebar/sidebar";
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
