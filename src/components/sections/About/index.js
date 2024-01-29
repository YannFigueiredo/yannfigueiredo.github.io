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
                    Possuo experiência prática em um projeto real de voluntariado na ONG Lacrei Saúde, onde 
                    participei do desenvolvimento de uma plataforma inclusiva para conectar profissionais da 
                    saúde com pacientes da comunidade LGBTQIA+. Nesse projeto, pude aplicar na prática o 
                    desenvolvimento ágil com SCRUM e aprender e aprimorar tecnologias como Next.js, JavaScript, 
                    TypeScript, consumo de API com Axios, versionamento de código com git, React Hook Form e 
                    construção de componentes responsivos e fiéis a modelos do figma. É um projeto 
                    muito importante onde desenvolvi muito minhas habilidades técnicas, comunicação, trabalho 
                    em equipe e otimização de tempo de codificação.
                </p>
                <p>
                    Fazendo projetos pessoais foquei em utilizar o framework React para desenvolver projetos 
                    cada vez mais otimizados e completos, como o meu mais recente, Productions Guide, onde 
                    trabalhei diversas competências como consumo de API com axios, testes com jest, estilização 
                    e componentização com styled components, e gerenciamento de estados com context api. 
                    Atualmente, além de me aprimorar no front-end, estou praticando back-end com Node.js/Express.js 
                    em novos projetos pessoais.
                </p>
            </TextWrapper>
        </Container>
    );
}