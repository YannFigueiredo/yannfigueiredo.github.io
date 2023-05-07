import { useState, useEffect, useRef } from "react";
import { Container, Header, Main, ContentWrapper, Skills } from "./styles";

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
    const [isMobile, setIsMobile] = useState(/Mobi/.test(navigator.userAgent)); 
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
            <Header 
                data-testid="job-header" 
                onClick={() => {
                    if(isMobile) handleContentArea();
                }} 
                onMouseOver={() =>{
                    if(!isMobile) handleContentArea();
                }} 
                onMouseOut={() =>{
                    if(!isMobile) handleContentArea();
                }} 
            >
                <div>
                    <img src={imageCompanyUrl} alt={companyName} />
                </div>
                <p>
                    {initialData}<br/>-<br/>{actualJob ? "Hoje" : finalData}
                </p>
            </Header>
            <Main ref={mainContent} data-testid="job-main">
                <ContentWrapper>
                    <div>
                        <h3>{companyName}</h3>
                        <span>{jobName}</span>
                    </div>
                    <p>
                        {description}
                    </p>
                </ContentWrapper>
                <Skills>
                    <span>Tecnologias:</span>
                    <div className="skills-wrapper">
                        {skillsUrlList.map((skill, key) =>
                            <img 
                                key={key}
                                src={skill.url}
                                alt={skill.name}
                                title={skill.name}
                            />
                        )}
                    </div>
                </Skills>
            </Main>
        </Container>
    );
}