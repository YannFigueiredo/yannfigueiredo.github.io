import { Container, ImageWrapper, TextWrapper } from "./styles";
import aboutImage from "assets/images/photo.png"

export default function About() {
    return(
        <Container id="about">
            <ImageWrapper>
                <img 
                    src={aboutImage}
                    alt="Imagem da seção 'sobre'"
                />
            </ImageWrapper>
            <TextWrapper>
                <h2>Sobre mim</h2>
                <p>
                    Olá, me chamo Yann Figueiredo. Sou formado em ciência da computação e tenho como foco o 
                    desenvolvimento front-end. Sou uma pessoa muito determinada, organizada e que sempre 
                    busca aprender mais. Durante a universidade, adquiri conhecimentos técnicos em 
                    refatoração, banco de dados, diagrama UML, metodologias ágeis, código limpo, estrutura 
                    de dados, documentação de software, testes e inteligência artificial.
                </p>
                <p>
                    Sou um Desenvolvedor Front-End com 6 meses de experiência no mercado, atuando pela ONG Lacrei Saúde. Participei do desenvolvimento de uma plataforma inclusiva que visa conectar profissionais da saúde com pacientes da comunidade LGBTQIA+, com o intuito de fornecer opções de atendimento médico mais humanizado. Nesse projeto apliquei na prática o desenvolvimento ágil com SCRUM e aprendi e/ou aprimorei tecnologias como React, Next, JavaSript, TypeScript, Styled Comppnents, consumo de API com Axios, versionamento de código com Git e construção de componentes responsivos, reutilizáveis e fiéis a modelos do figma elaborados pela equipe de UX/UI Design. É um projeto muito importante, onde desenvolvi muito minhas habilidades técnicas, comunicação, trabalho em equipe, capacidade para resolução de problemas, otimização de SEO, código limpo (clean code) e melhores práticas de programação. Atualmente, além de me aprimorar no front-end, estou praticando back-end com Java e Spring Boot.
                </p>
            </TextWrapper>
        </Container>
    );
}
