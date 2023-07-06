import { render, screen, fireEvent } from "@testing-library/react";
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

    it("O menu precisa ser aberto quando o botão de 'abrir menu' for pressionado", () => {
        render(
            <AppProviders>
                <Header />
            </AppProviders>
        )

        const menuHeader = screen.getByTestId("menu-header");
        const btnOpenMenu = screen.getByTestId("btn-open-menu");
        const btnCloseMenu = screen.getByTestId("btn-close-menu");

        fireEvent.click(btnOpenMenu);

        expect(menuHeader).toHaveStyle({height: "auto"});
        expect(btnOpenMenu).toHaveClass("btn-hidden");
        expect(btnCloseMenu).not.toHaveClass("btn-hidden");
    });

    it("O menu precisa ser fechado quando o botão de 'fechar menu' for pressionado", () => {
        render(
            <AppProviders>
                <Header />
            </AppProviders>
        )

        const menuHeader = screen.getByTestId("menu-header");
        const btnOpenMenu = screen.getByTestId("btn-open-menu");
        const btnCloseMenu = screen.getByTestId("btn-close-menu");

        fireEvent.click(btnCloseMenu);

        expect(menuHeader).toHaveStyle({height: "0"});
        expect(btnOpenMenu).not.toHaveClass("btn-hidden");
        expect(btnCloseMenu).toHaveClass("btn-hidden");
    });
});