import styled from "styled-components"

export const Container = styled.div`
    max-width: ${props => props.large ? 'auto' : '21.875rem'};
    border: 0.0625rem solid white;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.card_background};
    overflow: hidden;
`

export const Header = styled.div`
    margin-bottom: ${({theme}) => theme.spacing.margin.very_small};
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    padding: ${({theme}) => theme.spacing.padding.very_small};
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${({theme}) => theme.spacing.padding.very_small};
    gap: ${({theme}) => theme.spacing.between_elements.small};

    .skill {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 4.0625rem;

        img {
            width: 100%;
        }

        span {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
        .skill {
            justify-content: center;
            text-align: center;

            span {
                display: inline-block;
                font-size: ${({theme}) => theme.fontSize.small};
            }
        }
    }
`