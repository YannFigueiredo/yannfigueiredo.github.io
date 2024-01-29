import plataformaLacreiSaude from "assets/images/projects-thumbs/plataforma-lacrei-saude.png"
import distribuidoraSpider from "assets/images/projects-thumbs/distribuidora-spider.png";
import portfolio from "assets/images/projects-thumbs/portfolio.png";

export const projectsList = [
    {
      title: "Meu portfólio",
      description: "Este site, que é meu portfólio pessoal com informações como projetos feitos, experiência e tecnologias que domino.",
      highlights: [
          "Tecnologias: JavaScript, HTML, CSS e Styled-Components.",
      ],
      thumbUrl: portfolio,
      githubUrl: "https://github.com/YannFigueiredo/yannfigueiredo.github.io",
      projectUrl: "https://yannfigueiredo.github.io/"
    },
    {
      title: "Distribuidora Spider",
      description: "API com um CRUD para gerenciar vendas e compras de produtos em uma distribuidora fictícia.",
      highlights: [
          "Tecnologias: Node.js, JavaScript, Jest, Express, Yup, Sequelize e MySQL.",
          "A API possui um CRUD completo.",
          "O banco de dados possui vários tipos de relações, inclusive 'muitos para muitos'.",
      ],
      thumbUrl: distribuidoraSpider,
      githubUrl: "https://github.com/YannFigueiredo/distribuidora-spider",
      projectUrl: "https://distribuidora-spider-api.onrender.com/api-docs/"
    },
    {
        title: "Plataforma Lacrei Saúde",
        description: "Plataforma inclusiva que possiblita a conexão entre profissionais da área de saúde e possíveis pacientes da comunidade LGBTQIA+. Neste projeto participei do desenvolvimento do front-end da área de profissionais da saúde e também de usuários/pacientes.",
        highlights: [
            "Tecnologias: JavaScript, TypeScript, HTML, React.js, Next.js, Gatsby.js, Axios, Context API, React Hook Form e Styled-Components.",
            "A plataforma possui uma API (https://lacrei-api-sandbox.herokuapp.com/docs/swagger/) bem completa, tendo inclusive autenticação.",
            "O front-end foi componentizado de acordo com o projeto do figma e Style-Guide feitos pela equipe de UX/UI.",
            "A plataforma possui: formulários, pesquisa, criação e personalização de perfil e integração com webcam."
        ],
        thumbUrl: plataformaLacreiSaude,
        githubUrl: "",
        projectUrl: "https://lacreisaude.com.br/"
    },
    {
        title: "Productions Guide",
        description: "Aplicação responsiva, feita em React, que disponibiliza informações sobre diversos tipos de produções como filmes, séries e documentários. Este projeto usa uma API para obter as informações disponibilizadas para o usuário.",
        highlights: [
            "Tecnologias: JavaScript, HTML, CSS, React.js, Jest, React Testing Library, Axios, Context API e Styled-Components.",
            "O site usa a API 'The Movie Database API', encontarda em https://developers.themoviedb.org/3/getting-started/introduction.",
            "O projeto possui testes automatizados para testar consumo da API, renderização e consumo de contexto.",
            "O projeto contém paginação, filtros, pesquisa e carrosel de itens."
        ],
        thumbUrl: "https://github.com/YannFigueiredo/assets/blob/main/yannfigueiredo.github.io/thumbs/productions-guide.png?raw=true",
        githubUrl: "https://github.com/YannFigueiredo/productions-guide",
        projectUrl: "https://productionsguide.netlify.app/"
    },
    {
        title: "Gamer Preference Survey",
        description: "Aplicativo Web que lista os jogos mais populares de acordo com os votos dos usuários, podendo ser filtrados pela data do registro. Os votos são registrados e lidos a partir de uma API, e até mesmo gráficos são gerados a partir desses registros.",
        highlights: [
            "Tecnologias: JavaScript, Node.js, Express.js, Apex Charts, MySQL, HTML, CSS, TypeScript, React.js, Styled components, Axios e Context API.",
            "A API permite que sejam cadastrados novos votos, com uma interface dedicada, e ainda lista os votos em formato de tabela.",
            "A aplicação disponibiliza estísticas gráficas, usando a biblioteca Apex Charts, dos votos obtidos."
        ],
        thumbUrl: "https://github.com/YannFigueiredo/assets/blob/main/yannfigueiredo.github.io/thumbs/gamer-preference-survey.png?raw=true",
        githubUrl: "https://github.com/YannFigueiredo/gamer-preference-survey",
        projectUrl: "https://gamerpreferencesurvey.netlify.app/"
    },
    {
        title: "Brasil Penta",
        description: "Site responsivo com diversas informações sobre a seleção brasileira pentacampeã do mundo em 2002 no Japão.",
        highlights: [
            "Tecnologias: HTML, CSS, JavaScript, React e Context API.",
            "O foco de desenvolvimento desse site foi apenas no front-end.",
            "Um recurso intessante integrado ao site foi um carrosel de cards para criar uma exposição do elenco titular da seleção brasileira da copa do mundo de 2002."
        ],
        thumbUrl: "https://github.com/YannFigueiredo/assets/blob/main/yannfigueiredo.github.io/thumbs/brasil-penta.png?raw=true",
        githubUrl: "https://github.com/YannFigueiredo/brasil-penta",
        projectUrl: "https://brasilpenta.netlify.app/"
    }
]