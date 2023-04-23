import { Container, SkillsWrapper } from "./styles"
import { listSkills } from "utils/skills";
import SkillsCard from "components/shared/SkillsCard";

export default function Skills() {
    return(
        <Container>
            <h2>Conhecimento</h2>
            <SkillsWrapper>
                {listSkills.map(skill => (
                    <SkillsCard 
                        listName={skill.listName}
                        list={skill.list}
                        large={true}
                    />
                ))}
            </SkillsWrapper>
        </Container>
    );
}