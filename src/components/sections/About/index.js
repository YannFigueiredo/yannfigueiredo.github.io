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
                    Olá, me chamo Yann Figueiredo, sou paraense e sou formado como Bacharel em Ciência 
                    da Computação. Sou uma pessoa muito determinada, organizada e que sempre busca aprender 
                    mais. Atualmente me dedico a melhorar minhas habilidades como desenvolvedor 
                    back-end, depois de ter me dedicado por mais de uma ano para aprimorar meu conhecimento em front-end.
                </p>
                <p>
                    Fazendo projetos pessoais foquei em utilizar o framework React para desenvolver projetos 
                    cada vez mais otimizados e completos, como o meu mais recente, Productions Guide, onde 
                    trabalhei diversas competências como consumo de API com axios, testes com jest, estilização 
                    e componentização com styled componemts, e gerenciamento de estados com context api. Atualmente estou praticando back-end com Node.js em novos projetos pessoais.
                </p>
                <p>
                    Recentemente trabalhei de forma voluntária para a ONG Lacrei Saúde, onde contribuí no 
                    desenvolvimento do front-end de uma plataforma inclusiva que vai possibilitar a conexão com 
                    profissionais da área da saúde para eventuais pacientes da comunidade LGBTQIA+. É um projeto 
                    muito importante onde desenvolvi muito minhas habilidades técnicas, comunição, trabalho 
                    em equipe e otimização de tempo de codificação. Trabalhamos com metodologia ágil SCRUM, o que 
                    deixou todo o processo de desenvolvimento do produto muito mais fluído. Na Lacrei Saúde, trabalhando 
                    em equipe, codificamos telas e componentes reutilizáveis e responsivos a partir de modelos 
                    disponibilizados no figma pela equipe de UI/UX. As tecnologias usadas durante o desenvolvimento do 
                    projeto foram: React.js, Next.js, Gatsby, TypeScript, JavaScript, HTML, Styled-Components, Axios, React Hook Form e versionamento 
                    com Git.
                </p>
            </TextWrapper>
        </Container>
    );
}