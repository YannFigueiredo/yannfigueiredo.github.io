import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppProviders } from "providers/AppProviders";
import ProjectCard from "components/shared/ProjectCard";
import { projectsList } from "utils/projects";

describe("ProjectCard", () => {
    const renderProjectCard = () => {
        render(
            <AppProviders>
                <ProjectCard
                    title="Título do projeto"
                    description="Descrição do projeto"
                    highlights={projectsList[0].highlights}
                    thumbUrl="https://github.com/YannFigueiredo/assets/blob/main/yannfigueiredo.github.io/thumbs/productions-guide.png?raw=true"
                    githubUrl="https://github.com/"
                    projectUrl="https://www.google.com/"
                />
            </AppProviders>
        );
    };

    it("Tela principal precisa renderizar corretamente", () => {
        renderProjectCard();

        const thumb = screen.getByAltText("Título do projeto");
        const titleCard = screen.getByText("Título do projeto");
        const descriptionCard = screen.getByText("Descrição do projeto");
        const infoBtn = screen.getByTestId("btn-info");
        const githubBtn = screen.getByTestId("btn-github");
        const linkBtn = screen.getByTestId("btn-link");
        
        expect(thumb).toBeInTheDocument();
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
        
        expect(secondaryScreen).toBeInTheDocument();
        expect(closeBtn).toBeInTheDocument();
        expect(secondaryScreen).toHaveStyle({
            transform: "translateY(-100%)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0
        });
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
});