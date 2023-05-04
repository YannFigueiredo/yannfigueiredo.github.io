import { Container, SkillsWrapper } from "./styles"
import { listSkills } from "utils/skills";
import SkillsCard from "components/shared/SkillsCard";

export default function Skills() {
    return(
        <Container id="skills">
            <h2>Conhecimento</h2>
            <SkillsWrapper>
                {listSkills.map((skill, key) => (
                    <SkillsCard 
                        listName={skill.listName}
                        list={skill.list}
                        large={true}
                        key={key}
                    />
                ))}
            </SkillsWrapper>
        </Container>
    );
}