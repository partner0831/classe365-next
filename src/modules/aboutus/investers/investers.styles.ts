import styled from "styled-components";

export const InvesterWrapper = styled.div`
    max-width: 1240px;
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
     
        display: flex;
        align-items: center;
    }
    h1{
        color: #2D6CCB;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.4px;
        text-transform: uppercase;
    }
    h2{
        margin-top: 24px;
        color: var(--site-heading, #1E2123);
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    h3{
        margin: 24px 0;
        color: var(--site-heading, #1E2123);
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    h4{
        color: var(--site-heading, #1E2123);
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`;
export const Stick = styled.div`
    width: 1px;
    margin: 0 6px;
    height: 27px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #3B3F42;
`