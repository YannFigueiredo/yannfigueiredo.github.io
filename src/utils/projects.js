import plataformaLacreiSaude from "assets/images/projects-thumbs/plataforma-lacrei-saude.png"

export const projectsList = [
    {
        title: "Plataforma Lacrei Saúde",
        description: "Plataforma inclusiva, ainda não lançada oficialmente, que possiblita a conexão entre profissionais da área de saúde e possíveis pacientes da comunidade LGBTQIA+. Neste projeto participei do desenvolvimento do front-end da área de profissionais da saúde e também de usuários/pacientes.",
        highlights: [
            "Tecnologias: JavaScript, TypeScript, HTML, React.js, Next.js, Gatsby.js, Axios, Context API, React Hook Form e Styled-Components.",
            "A plataforma possui uma API (https://lacrei-api-sandbox.herokuapp.com/docs/swagger/) bem completa, tendo inclusive autenticação.",
            "O front-end foi componentizado de acordo com o projeto do figma e Style-Guide feitos pela equipe de UX/UI.",
            "A plataforma possui: formulários, pesquisa, criação e personalização de perfil e integração com webcam."
        ],
        thumbUrl: plataformaLacreiSaude,
        githubUrl: "",
        projectUrl: "https://frontend-lacrei-institucional.vercel.app/"
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
        title: "Pets Area",
        description: "API com um CRUD para registros de animais de estimação dos usuários. A API contém diversos filtros e opções de ordenação para tratar os registros vindos do banco de dados PostgreSQL.",
        highlights: [
            "Tecnologias: Java, Spring Boot, Swagger, JPA e PostgreSQL.",
            "A API possui um CRUD completo, tanto para owners/usuários quanto para os pets.",
            "A API possibilita filtrar os pets por intervalo de idade, gênero e tipo.",
            "A API possibilita filtrar pets por meio de busca por palavras chave, onde os campos analisados são o nome e a descrição.",
            "Autenticação e o projeto front-end estão em desenvolvimento."
        ],
        thumbUrl: "https://github.com/YannFigueiredo/assets/blob/main/yannfigueiredo.github.io/thumbs/pets-area.png?raw=true",
        githubUrl: "https://github.com/YannFigueiredo/pets-area",
        projectUrl: "https://pets-area.up.railway.app/swagger-ui/"
    },
    {
        title: "Gamer Preference Survey",
        description: "Aplicativo Web que lista os jogos mais populares de acordo com os votos dos usuários, podendo ser filtrados pela data do registro. Os votos são registrados e lidos a partir de uma API, e até mesmo gráficos são gerados a partir desses registros.",
        highlights: [
            "Tecnologias: Java, Spring Boot, JPA, Apex Charts, PostgreSQL, HTML, CSS, TypeScript, React, Styled components, Axios e Context API.",
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