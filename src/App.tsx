import { Header } from "./Components/Header";
import { GlobalStyle } from "./Global";
import { Home } from "./pages/Home";

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
        </>
    );
}

export default App;
