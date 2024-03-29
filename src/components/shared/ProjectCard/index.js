import { useRef } from "react"
import { Container, MainScreen, Thumb, Content, TextWrapper, ButtonsWrapper, SecondaryScreen } from "./styles";
import CloseButtonIcon from "assets/icons/CloseButton";
import InfoIcon from "assets/icons/Info";
import GithubIcon from "assets/icons/Github";
import LinkIcon from "assets/icons/Link";

export default function ProjectCard({
    title, 
    description,
    highlights = [],
    thumbUrl,
    githubUrl,
    projectUrl
}) {
    const projectInfos = useRef(null)

    function openProjectInfos() {
        projectInfos.current.style.transform = "translateY(0%)";
    }
    
    function closeProjectInfos() {
        projectInfos.current.style.transform = "translateY(-100%)";
    } 

    return (
        <Container>
            <MainScreen>
                <Thumb>
                    <img src={thumbUrl} alt={title}/>
                </Thumb>
                <Content>
                    <TextWrapper>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </TextWrapper>
                    <ButtonsWrapper>
                        <div className="link-info">
                            <InfoIcon onClick={() => {openProjectInfos()}} data-testid="btn-info" />
                        </div>
                        <div className="links-app">
                            <a href={githubUrl} target="_blank" rel="noreferrer" data-testid="btn-github">
                                <GithubIcon />
                            </a>
                            <a href={projectUrl} target="_blank" rel="noreferrer" data-testid="btn-link">
                                <LinkIcon />
                            </a>
                        </div>
                    </ButtonsWrapper>
                </Content>
            </MainScreen>
            <SecondaryScreen data-testid="project-card-secondary-screen" ref={projectInfos}>
                <CloseButtonIcon className="btn-close" onClick={() => {closeProjectInfos()}} data-testid="btn-close" />
                <ul>
                    {highlights.map((highlight, key) =>
                        <li key={key}>{highlight}</li>
                    )}
                </ul>
            </SecondaryScreen>
        </Container>
    );
}