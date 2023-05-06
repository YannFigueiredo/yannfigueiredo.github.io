import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "providers/AppProviders";
import Header from "components/shared/Header";

describe("Header", () => {
    it("Header precisa renderizar corretamente", () => {
        render(
            <AppProviders>
                <Header />
            </AppProviders>
        )
        
        const header = screen.getByTestId("header");
        const menuHeader = screen.getByTestId("menu-header");
        const aboutBtn = screen.getByText("Sobre mim");
        const skillsBtn = screen.getByText("Conhecimento");
        const projectsBtn = screen.getByText("Projetos");
        
        expect(header).toBeInTheDocument();
        expect(menuHeader).toBeInTheDocument();
        expect(aboutBtn).toBeInTheDocument();
        expect(skillsBtn).toBeInTheDocument();
        expect(projectsBtn).toBeInTheDocument();
    });

    it("Menu do header precisa ser fixo quando o scroll da tela for maior que 200", () => {
        render(
            <AppProviders>
                <Header />
            </AppProviders>
        )

        const menuHeader = screen.getByTestId("menu-header");

        window.scrollY = 201;
        window.dispatchEvent(new Event('scroll'));

        expect(menuHeader).toHaveClass("scroll");
    });
});