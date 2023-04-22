import { Container, LinksWrapper } from "./styles"
import LinkedinIcon from "../../../asserts/icons/LinkedIn"
import GithubIcon from "../../../asserts/icons/Github"
import PdfIcon from "../../../asserts/icons/Pdf" 
import EmailIcon from "../../../asserts/icons/Email"

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
                >
                    <LinkedinIcon />
                </a>
                <a 
                    title="Github" 
                    href="https://github.com/YannFigueiredo"
                    className="link-github"
                >
                    <GithubIcon />
                </a>
                <a 
                    title="Currículo" 
                    href="../../../asserts/files/Yann Fabricio Cardoso de Figueiredo - Currículo.pdf"
                    download
                    className="link-resume"
                >
                    <PdfIcon />
                </a>
                <a 
                    title="Email" 
                    href="mailto:yannfabricio@gmail.com"
                    className="link-email"
                >
                    <EmailIcon />
                </a>
            </LinksWrapper>
        </Container>
    );
}