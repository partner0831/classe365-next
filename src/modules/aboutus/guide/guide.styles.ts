import styled from "styled-components";

export const GuideWrapper = styled.div`
    max-width: 1240px;
    width: 95%;
    margin: 124px auto auto auto;
    border-radius: 24px;
    background-color: var(--bright-blue, #6772E5);
    position: relative;
    padding: 80px 92px;
    img{
        position: absolute;
    }
    p{
        color: var(--white, #FFF);
        text-align: center;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .about-donation{
        top: 70px;
        right: 48px;
        @media screen and (max-width: 580px) {
            top: 20px;
            right: 28px;
        }
    }
    .about-star{
        bottom: 70px;
        left: 48px;
        @media screen and (max-width: 580px) {
            bottom: 20px;
            left: 28px;
        }
    }
    & > div {
        margin-top: 46px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 56px;
    }
    @media screen and (max-width: 1024px) {
    padding: 80px 40px;
        & > div {
        grid-template-columns: repeat(2, 1fr);
            div.empty {
                display: none;
            }
        }
        
    }
    @media screen and (max-width: 580px) {
        & > div {
            grid-template-columns: 1fr;
        }
   
    }
`;
export const GuideView = styled.div`
    display: flex;
    svg{
        margin-right: 12px;
    }
`
export const GuideContent = styled.div`
    h1{
        color: var(--white, #FFF);
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    h2{
        max-width: 328px;
        margin-top: 12px;
        color: var(--white, #FFF);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
    }
`