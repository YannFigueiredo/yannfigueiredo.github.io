import { Container, JobsWrapper } from "./styles";
import JobCard from "components/shared/JobCard";
import { jobsList } from "utils/jobs";

export default function Jobs() {
    return(
        <Container id="jobs">
            <h2>Experiência</h2>
            <JobsWrapper>
                {jobsList.map(job => (
                    <JobCard
                        imageCompanyUrl={job.imageCompanyUrl}
                        companyName={job.companyName}
                        jobName={job.jobName}
                        description={job.description}
                        initialData={job.initialData}
                        finalData={job.finalData}
                        actualJob={job.actualJob}
                        skillsUrlList={job.skillsUrlList}
                    />
                ))}
            </JobsWrapper>
        </Container>
    );
}