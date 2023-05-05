import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppProviders } from "providers/AppProviders";
import ProjectCard from "components/shared/ProjectCard";
import { projectsList } from "utils/projects";
import { faker } from "@faker-js/faker";

describe("ProjectCard", () => {
    const title = faker.name.jobTitle();
    const description = faker.lorem.paragraph();
    const url = faker.internet.url();
    const thumb = faker.internet.url();

    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => {});

    const renderProjectCard = () => {
        render(
            <AppProviders>
                <ProjectCard
                    title={title}
                    description={description}
                    highlights={projectsList[0].highlights}
                    thumbUrl={url}
                    githubUrl={url}
                    projectUrl={thumb}
                />
            </AppProviders>
        );
    };

    it("Tela principal precisa renderizar corretamente", () => {
        renderProjectCard();

        const thumbCard = screen.getByAltText(title);
        const titleCard = screen.getByText(title);
        const descriptionCard = screen.getByText(description);
        const infoBtn = screen.getByTestId("btn-info");
        const githubBtn = screen.getByTestId("btn-github");
        const linkBtn = screen.getByTestId("btn-link");
        
        expect(thumbCard).toBeInTheDocument();
        expect(titleCard).toBeInTheDocument();
        expect(descriptionCard).toBeInTheDocument();
        expect(infoBtn).toBeInTheDocument();
        expect(githubBtn).toBeInTheDocument();
        expect(linkBtn).toBeInTheDocument();
    });

    it("Tela secundária precisa renderizar corretamente com deslocamento vertical de -100%", () => {
        renderProjectCard();

        const secondaryScreen = screen.getByTestId("project-card-secondary-screen");
        const closeBtn = screen.getByTestId("btn-close");
        const highlight = screen.getByText("O projeto contém paginação, filtros, pesquisa e carrosel de itens.");
        
        expect(secondaryScreen).toBeInTheDocument();
        expect(closeBtn).toBeInTheDocument();
        expect(secondaryScreen).toHaveStyle({
            transform: "translateY(-100%)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0
        });
        expect(highlight).toBeInTheDocument();
    });

    it("Tela secundária precisa ser deslocada verticalmente para 0% quando o botão de informação da tela principal for clicado", () => {
        renderProjectCard();

        const infoBtn = screen.getByTestId("btn-info");
        const secondaryScreen = screen.getByTestId("project-card-secondary-screen");

        fireEvent.click(infoBtn);

        expect(secondaryScreen).toHaveStyle({
            transform: "translateY(0%)"
        });
    });

    it("Tela secundária precisa ser deslocada verticalmente para -100% quando estiver com deslocamento em 0% e o botão fechar da tela secundária for clicado", () => {
        renderProjectCard();
        
        const infoBtn = screen.getByTestId("btn-info");
        const secondaryScreen = screen.getByTestId("project-card-secondary-screen");
        const closeBtn = screen.getByTestId("btn-close");
        
        fireEvent.click(infoBtn);
        fireEvent.click(closeBtn);

        expect(secondaryScreen).toHaveStyle({
            transform: "translateY(-100%)"
        });
    });

    it("O botão de github precisa renderizar com href e target corretos para abrir a url em outra aba do navegador", () => {
        renderProjectCard();

        const githubBtn = screen.getByTestId("btn-github");

        expect(githubBtn).toHaveAttribute('href', url);
        expect(githubBtn).toHaveAttribute('target', '_blank');
    });

    it("O botão de link do projeto precisa renderizar com href e target corretos para abrir a url em outra aba do navegador", () => {
        renderProjectCard();

        const infoBtn = screen.getByTestId("btn-github");

        expect(infoBtn).toHaveAttribute('href', url);
        expect(infoBtn).toHaveAttribute('target', '_blank');
    });
});