import { Container, Header, Content } from "./styles";

/**
Card para listar habilidades de desenvolvedor, como linguagens e frameworks.

@param {props}
@param listName - Nome para identificar o card de conhecimentos
@param list - Um array de objetos, representando os conhecimentos, onde cada objeto possui um nome do conhecimento e a url do ícone
@param large - Um valor booleano que define se o card terá um limite de tamanho ou não
@returns {JSX.Element} Componente React

@example
<SkillsCard
    listName="Linguagens"
    list={[{name: "Python", url: "http://img-python.com"}]}
/>
*/
export default function SkillsCard({ listName, list, large = false }) {
    return (
        <Container large={large}>
            <Header>
                <h3>{listName}</h3>
            </Header>
            <Content>
                {list.map((item, key) =>
                    <div className="skill" key={key}>
                        <img src={item.url} alt={item.name} title={item.name}/>
                        <span>{item.name}</span>
                    </div>
                )}
            </Content>
        </Container>
    );
}