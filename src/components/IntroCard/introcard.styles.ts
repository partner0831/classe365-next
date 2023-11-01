import styled from "styled-components";

export const IntroCardWrapper = styled.div<{ color: string }>`
    background-color: ${({color})=>color?color:"#FAFAFA"};
    max-width: 594px;
    width: 100%;
    min-height: fit-content;
    border-radius: 12px;
    padding: 40px 30px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
    @media screen and (max-width: 425px) {
        padding: 20px 15px;
        h1{
            font-size: 24px !important;
        }
        h4{
            font-size: 13px !important;
        }
    }
    h1{
        color: var(--site-heading, #1E2123);
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    h2{
        color: var(--text-grey-dark, #3B3F42);
        margin: 19px 0 5px 0;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 122.222% */
    }
    h3,h4{
        color: var(--text-grey-dark, #3B3F42);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
    }
    h4{
        margin-top: 25px;
    }
    svg{
        margin: 24px 0 5px 0;
    }
`