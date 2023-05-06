import { useRef } from "react";
import { Container, Header, Main } from "./styles";

export default function JobCard({
    imageCompanyUrl,
    companyName,
    jobName,
    description,
    initialData,
    finalData,
    actualJob = false,
    skillsUrlList = []
}) {
    const mainContent = useRef(null);

    function handleContentArea() {
        if(!mainContent.current.classList.contains("expand")){
            mainContent.current.classList.add("expand");
        }else{
            mainContent.current.classList.remove("expand");
        }
    }

    return(
        <Container>
            <Header data-testid="job-header" onClick={handleContentArea}>
                <div>
                    <img src={imageCompanyUrl} alt={companyName} />
                </div>
                <p>
                    {initialData} - {actualJob ? "Hoje" : finalData}
                </p>
            </Header>
            <Main ref={mainContent} data-testid="job-main">
                <h3>{companyName} - {jobName}</h3>
                <p>
                    {description}
                </p>
                <span>Tecnologias:</span>
                <div>
                    <div>
                        {skillsUrlList.map((skill, key) =>
                            <div key={key}>
                                <img 
                                    src={skill.url}
                                    alt={skill.name}
                                    title={skill.name}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Main>
        </Container>
    );
}