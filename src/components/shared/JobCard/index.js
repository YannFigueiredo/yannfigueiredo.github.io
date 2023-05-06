import { useRef } from "react";
import { Container, Header, Main, ContentWrapper, SkillsCarrousel } from "./styles";

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
                <ContentWrapper>
                    <h3>{companyName}</h3>
                    <span>{jobName}</span>
                    <p>
                        {description}
                    </p>
                </ContentWrapper>
                <SkillsCarrousel>
                    <span>Tecnologias:</span>
                    <div className="skills-wrapper">
                        <div className="skills">
                            {skillsUrlList.map((skill, key) =>
                                <div className="skill" key={key}>
                                    <img 
                                        src={skill.url}
                                        alt={skill.name}
                                        title={skill.name}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </SkillsCarrousel>
            </Main>
        </Container>
    );
}