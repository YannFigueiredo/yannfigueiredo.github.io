import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "providers/AppProviders";
import Footer from "components/shared/Footer"

describe("Footer", () => {
    it("Footer precisa renderizar corretamente", () => {
        render(
            <AppProviders>
                <Footer/>
            </AppProviders>
        );

        const footer = screen.getByTestId("footer");
        const footerRights = screen.getByText("© Yann Fabricio Cardoso de Figueiredo, 2022");
        const footerEmail = screen.getByText("yannfabricio@gmail.com");

        expect(footer).toBeInTheDocument();
        expect(footerRights).toBeInTheDocument();
        expect(footerEmail).toBeInTheDocument();
    });   
});