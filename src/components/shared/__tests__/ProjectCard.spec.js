import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "providers/AppProviders";
import ProjectCard from "components/shared/ProjectCard";
import { projectsList } from "utils/projects";

describe("ProjectCard", () => {
    it("Tela principal do ProjectCard precisa renderizar corretamente", () => {
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

        const thumb = screen.getByAltText("Título do projeto");
        const titleCard = screen.getByText("Título do projeto");
        const descriptionCard = screen.getByText("Descrição do projeto");
        const infoBtn = screen.getByTestId("info-btn");
        const githubBtn = screen.getByTestId("github-btn");
        const linkBtn = screen.getByTestId("link-btn");
        
        expect(thumb).toBeInTheDocument();
        expect(titleCard).toBeInTheDocument();
        expect(descriptionCard).toBeInTheDocument();
        expect(infoBtn).toBeInTheDocument();
        expect(githubBtn).toBeInTheDocument();
        expect(linkBtn).toBeInTheDocument();
    });
});