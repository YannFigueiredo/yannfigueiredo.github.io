import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_title_content.normal};
`

export const JobsWrapper = styled.div`
    overflow-x: auto;
    animation: fadeIn 1.5s;
`