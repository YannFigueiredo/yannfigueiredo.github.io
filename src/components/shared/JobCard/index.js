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
    const [isMobile, setIsMobile] = useState(null); 
    const mainContent = useRef(null);
    const header = useRef(null);

    function handleExpandArea() {
        if(!mainContent.current.classList.contains("expand")){
            mainContent.current.classList.add("expand");
        }else{
            mainContent.current.classList.remove("expand");
        }

        if(!header.current.classList.contains("header-restyle")){
            header.current.classList.add("header-restyle");
        }else{
            header.current.classList.remove("header-restyle");
        }
    }

    useEffect(() => {setIsMobile(/Mobi/.test(navigator.userAgent))}, []);

    return(
        <Container>
            <Header 
                ref={header}
                data-testid="job-header"
                onClick={() => {
                    if(isMobile) handleExpandArea();
                }} 
                onMouseOver={handleExpandArea} 
                onMouseOut={handleExpandArea} 
            >
                <div>
                    <img src={imageCompanyUrl} alt={companyName} />
                </div>
                <p>
                    {initialData}<br/>-<br/>{actualJob ? "Hoje" : finalData}
                </p>
            </Header>
            <Main 
                ref={mainContent} 
                data-testid="job-main"
                onMouseOver={handleExpandArea} 
                onMouseOut={handleExpandArea} 
            >
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