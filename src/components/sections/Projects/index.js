import { Container, ProjectsWrapper } from "./styles";
import { projectsList } from "utils/projects";
import ProjectCard from "components/shared/ProjectCard";

export default function Projects() {
    return(
        <Container id="projects">
            <h2>Projetos</h2>
            <ProjectsWrapper>
                {projectsList.map(project =>(
                    <ProjectCard 
                        title={project.title}
                        description={project.description}
                        highlights={project.highlights}
                        thumbUrl={project.thumbUrl}
                        githubUrl={project.githubUrl}
                        projectUrl={project.projectUrl}
                    />
                ))}
            </ProjectsWrapper>
        </Container>
    );
}