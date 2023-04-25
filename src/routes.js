import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Header from "components/shared/Header";

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}