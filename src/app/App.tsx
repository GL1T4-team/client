import GlobalStyle from "@/shared/styles/global.styles";
import { RouterProvider } from "react-router";
import routes from "./router/routes";

function App() {
    return (
        <>
            <RouterProvider router={routes} />
            <GlobalStyle />
        </>
    );
}

export default App;
