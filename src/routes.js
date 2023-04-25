import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}