import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppProviders } from "providers/AppProviders";
import SkillsCard from "components/shared/SkillsCard";
import { faker } from "@faker-js/faker";

const skillsCardTitle = faker.name.jobTitle();
const skillsList = [
    {
        name: faker.name.jobTitle(),
        url: faker.image.imageUrl()
    },
    {
        name: faker.name.jobTitle(),
        url: faker.image.imageUrl()
    }
];

const renderSkillsCard = () => {
    render(
        <AppProviders>
            <SkillsCard
                listName={skillsCardTitle}
                list={skillsList}
            />
        </AppProviders>
    );
}

describe("SkillsCard", () => {
    it("Precisa renderizar corretamente com título da skill oculto", () => {
        renderSkillsCard();

        const cardHeader = screen.getByText(skillsCardTitle);
        const firstSkill = screen.getByAltText(skillsList[0].name);
        const nameFirstSkill = screen.getByText(skillsList[0].name);

        expect(cardHeader).toBeInTheDocument();
        expect(firstSkill).toBeInTheDocument();
        expect(nameFirstSkill).toHaveStyle({
            display: "none"
        })
    })
});