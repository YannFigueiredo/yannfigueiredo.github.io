import { Container } from "../../components/shared/Container";
import Intro from "../../components/sections/Intro";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import Projects from "components/sections/Projects";
//import JobCard from "components/shared/JobCard";
//import { jobsList } from "utils/jobs";

/*
Temporário para teste
<JobCard
    imageCompanyUrl={jobsList[0].imageCompanyUrl}
    companyName={jobsList[0].companyName}
    jobName={jobsList[0].jobName}
    description={jobsList[0].description}
    initialData={jobsList[0].initialData}
    finalData={jobsList[0].finalData}
    actualJob={jobsList[0].actualJob}
    skillsUrlList={jobsList[0].skillsUrlList}
/>
*/

export default function Home() {
    return (
        <Container>
            <Intro />
            <About />
            <Skills />
            <Projects />
        </Container>
    );
}