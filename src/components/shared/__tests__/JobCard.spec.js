import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppProviders } from "providers/AppProviders";
import JobCard from "components/shared/JobCard";
import { faker } from "@faker-js/faker";

const imageCompanyUrl = faker.image.imageUrl();
const companyName = faker.name.jobTitle();
const jobName = faker.name.jobTitle();
const description = faker.lorem.paragraph();
const initialData = faker.date.month() + "/2023";
const finalData = faker.date.month() + "/2023";
const skillsUrlList = [
    {
        url: faker.internet.url(),
        name: faker.name.jobTitle()
    },
    {
        url: faker.internet.url(),
        name: faker.name.jobTitle()
    }
];

const renderJobCard = (actualJob) => {
    render(
        <AppProviders>
            <JobCard
                imageCompanyUrl = {imageCompanyUrl}
                companyName = {companyName}
                jobName = {jobName}
                description = {description}
                initialData = {initialData}
                finalData = {finalData}
                actualJob = {actualJob}
                skillsUrlList = {skillsUrlList}
            />
        </AppProviders>
    );
}

describe("JobCard", () => {
    it("Precisa renderizar corretamente", () => {
        renderJobCard(false);

        const imageCompany = screen.getByAltText(companyName);
        const periodJob = screen.getByText(initialData + " - " + finalData);
        const descriptionJob = screen.getByText(description);
        const firstSkill = screen.getByAltText(skillsUrlList[0].name);

        expect(imageCompany).toBeInTheDocument();
        expect(periodJob).toBeInTheDocument();
        expect(descriptionJob).toBeInTheDocument();
        expect(firstSkill).toBeInTheDocument();
    });

    it("O conteúdo principal precisa ter a classe expand quando o header for clicado", () => {
        renderJobCard(false);

        const jobHeader = screen.getByTestId("job-header");
        const jobMain = screen.getByTestId("job-main");

        fireEvent.click(jobHeader);

        expect(jobMain).toHaveClass("expand");
    });

    it("O conteúdo principal precisa ter a classe expand removida quando o header for clicado novamente", () => {
        renderJobCard(false);

        const jobHeader = screen.getByTestId("job-header");
        const jobMain = screen.getByTestId("job-main");

        fireEvent.click(jobHeader);
        fireEvent.click(jobHeader);

        expect(jobMain).not.toHaveClass("expand");
    });
});