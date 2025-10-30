import { Container, ImageWrapper, TextWrapper } from "./styles";
import aboutImage from "assets/images/photo.png";

export default function About() {
  return (
    <Container id="about">
      <ImageWrapper>
        <img src={aboutImage} alt="Imagem da seção 'sobre'" />
      </ImageWrapper>
      <TextWrapper>
        <h2>Sobre mim</h2>
        <p>
          Olá! Me chamo Yann Figueiredo, sou Desenvolvedor Front-End com mais de
          2 anos de experiência criando interfaces modernas, acessíveis e de
          alta performance. Sou formado em Ciência da Computação e apaixonado
          por transformar ideias em soluções digitais que unem design,
          tecnologia e usabilidade.
        </p>
        <p>
          Atualmente, atuo na Dotkon, desenvolvendo aplicações web para diversos
          segmentos, como farmacêutico, agronegócios, construção civil e
          transporte. Os projetos são realizados por times ágeis estruturados na
          metodologia Scrum, com foco em colaboração contínua, entregas
          incrementais e qualidade de código.
        </p>
        <p>
          No meu dia a dia, utilizo tecnologias como TypeScript, React, Chakra
          UI, Ant Design (AntD), Yup, React Hook Form, Formik e Playwright, além
          de trabalhar com Storybook, Git e Azure DevOps. Atuo no consumo de
          REST APIs por meio do Axios e em integrações de API GraphQL, sempre
          garantindo a comunicação eficiente entre front-end e back-end. Também
          realizo o desenvolvimento pixel a pixel a partir dos protótipos do
          Figma, assegurando fidelidade visual e uma excelente experiência do
          usuário.
        </p>
        <p>
          Anteriormente, atuei na ONG Lacrei Saúde, contribuindo para o
          desenvolvimento de uma plataforma inclusiva que conecta profissionais
          da saúde com pacientes da comunidade LGBTQIAPN+. Nesse projeto,
          desenvolvi interfaces responsivas e reutilizáveis, aplicando React,
          Next.js, TypeScript, Styled Components, Formik, Yup e boas práticas de
          acessibilidade, SEO e código limpo.
        </p>
        <p>
          Sou uma pessoa organizada, comunicativa e curiosa, que acredita no
          aprendizado contínuo e na importância de unir qualidade técnica com
          empatia pelo usuário. Além de me aperfeiçoar no front-end, também
          venho expandindo meus conhecimentos em back-end com Java e Spring
          Boot, buscando me tornar um desenvolvedor cada vez mais completo.
        </p>
      </TextWrapper>
    </Container>
  );
}
