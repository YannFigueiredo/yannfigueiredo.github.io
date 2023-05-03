import { Container, LinksWrapper } from "./styles"
import LinkedinIcon from "assets/icons/LinkedIn"
import GithubIcon from "assets/icons/Github"
import PdfIcon from "assets/icons/Pdf" 
import EmailIcon from "assets/icons/Email"

export default function Intro() {
    return(
        <Container id="intro">
            <h1>Yann Fabricio Cardoso de Figueiredo</h1>
            <span>Desenvolvedor Front-End</span>
            <LinksWrapper>
                <a 
                    title="LinkedIn" 
                    href="https://www.linkedin.com/in/yannfigueiredo/"
                    className="link-linkedin"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedinIcon />
                </a>
                <a 
                    title="Github" 
                    href="https://github.com/YannFigueiredo"
                    className="link-github"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GithubIcon />
                </a>
                <a 
                    title="Currículo" 
                    href="https://drive.google.com/file/d/18lgO870ux53k96egrVUlwMloAb17v5pE/view?usp=sharing"
                    download
                    className="link-resume"
                    target="_blank"
                    rel="noreferrer"
                >
                    <PdfIcon />
                </a>
                <a 
                    title="Email" 
                    href="mailto:yannfabricio@gmail.com"
                    className="link-email"
                    target="_blank"
                    rel="noreferrer"
                >
                    <EmailIcon />
                </a>
            </LinksWrapper>
        </Container>
    );
}