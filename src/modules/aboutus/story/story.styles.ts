import styled from "styled-components";

export const StoryWrapper = styled.div`
    max-width: 1240px;
    width: 95%;
    margin: 114px auto auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color: var(--bright-blue, #6772E5);
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.4px;
        text-transform: uppercase;  
    }
    h1{
        max-width: 894px;
        margin-top: 24px;
        color: var(--site-heading, #1E2123);
        text-align: center;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;