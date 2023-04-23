import { Container, ImageWrapper, TextWrapper } from "./styles";
import aboutImage from "../../../assets/images/photo.png"

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
                    Me chamo Yann Fabricio Cardoso de Figueiredo e estou sempre disposto a aprender 
                    mais. Sou formado em ciência da computação, e foco no desenvolvimento web Full 
                    Stack, especialmente com os frameworks React e Springboot. Na universidade 
                    trabalhei bastante com a linguagem Python, inclusive em projetos mais práticos 
                    com a metodologia ágil SCRUM, onde também utilizei as principais tecnologias de 
                    desenvolvimento web (JavaScript, HTML 5 e CSS 3) junto com tecnologias 
                    complementares como banco de dados PostgreSQL, Django, Docker e versionamento 
                    com git.
                </p>
                <p>
                    Fazendo projetos pessoais passei a adotar o framework React como minha principal 
                    ferramenta de desenvolvimento front-end de websites e o Springboot para 
                    desenvolvimento back-end. Nos meus projetos utilizei diversas tecnologias e 
                    bibliotecas para gerar um produto final mais completo, como Styled Components, 
                    React Hooks, Context API, Axios, JPA/Hibernate, entre outras.
                </p>
            </TextWrapper>
        </Container>
    );
}