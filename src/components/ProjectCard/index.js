import { Container, MainScreen, Thumb, Content, TextWrapper, ButtonsWrapper, SecondaryScreen } from "./styles";
import CloseButtonIcon from "../../asserts/icons/CloseButton";
import InfoIcon from "../../asserts/icons/Info";
import GithubIcon from "../../asserts/icons/Github";
import LinkIcon from "../../asserts/icons/Link";

export default function ProjectCard({
    title, 
    description,
    highlights = [],
    thumbUrl,
    githubUrl,
    projectUrl
}) {
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
                            <InfoIcon />
                        </div>
                        <div className="links-app">
                            <a href={githubUrl}>
                                <GithubIcon />
                            </a>
                            <a href={projectUrl}>
                                <LinkIcon />
                            </a>
                        </div>
                    </ButtonsWrapper>
                </Content>
            </MainScreen>
            <SecondaryScreen>
                <CloseButtonIcon className="btn-close" />
                <ul>
                    {highlights.map(highlight =>
                        <li>{highlight}</li>
                    )}
                </ul>
            </SecondaryScreen>
        </Container>
    );
}