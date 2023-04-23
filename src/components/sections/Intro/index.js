import { Container, LinksWrapper } from "./styles"
import LinkedinIcon from "../../../assets/icons/LinkedIn"
import GithubIcon from "../../../assets/icons/Github"
import PdfIcon from "../../../assets/icons/Pdf" 
import EmailIcon from "../../../assets/icons/Email"

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