import styled from "styled-components"

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 15px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ImageWrapper = styled.div`
    
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    p {
        text-indent: 20px;
        text-align: justify;
    }
`