import styled from "styled-components";

export const SpotCardWrapper = styled.div<{color:string}>`
    max-width: 394px;
    width: 100%;
    height: 444px;

    border-radius: 12px;
    box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
    background-color: ${({color})=>color?color:"white"};
    padding: 102px 30px;
    h2{
        color: #FFF;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: 42px; /* 116.667% */
        margin-top: 16px;
    }
    h3{
        color: var(--white, #FFF);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 42px; /* 262.5% */
        margin-top: 13px;
    }
    @media screen and (max-width:1280px){
        h2{
            font-size: 26px;
        }
    }
`