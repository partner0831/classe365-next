import styled from "styled-components";

export const ReviewCardWrapper = styled.div<{ color?: string }>`
    max-width: 391px;
    width: 100%;
    min-height: 440px;
    height: fit-content;
    height: 100%;
    border-radius: 12px;
    padding: 27px 24px;
    background-color: ${( {color} ) => (color ? color : "#f1f6fa")};;
    *{
        font-style: normal;
    }
    h1{
        color: var(--text-grey-dark, #3B3F42);
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
    }

    h2{
        color: var(--text-grey-light, #555);
        font-size: 16px;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
        margin-top: 24px;
    }
    h3{
        color: var(--text-grey-dark, #3B3F42);
        font-size: 18px;
        font-weight: 700;
        line-height: 22px; /* 122.222% */
        margin: 34px 0 5px 0;
    }
    h4{
        color: var(--text-grey-dark, #3B3F42);
        font-family: Inter;
        font-size: 16px;

        font-weight: 400;
        line-height: 22px; /* 137.5% */
     
    }
    h5{
        color: var(--text-grey-dark, #3B3F42);
        font-family: Inter;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px; /* 122.222% */
    }
    @media screen and (max-width:1280px) {
        h1{
            font-size: 24px;
        }
        min-height: 480px;
    }
    @media screen and (max-width:425px) {
        max-width: 100%;
        width: 100%;
        h1{
            font-size: 24px;
        }
        height: fit-content;
    }
`;