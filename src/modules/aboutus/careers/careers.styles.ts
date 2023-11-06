import styled from "styled-components";

export const CareersWrapper = styled.div`
    max-width: 1240px;
    width: 95%;
    margin: 169px auto auto auto;
    background: var(--bg-grey, #F1F6FA);
    display: flex;
    border-radius: 24px;
    
    h1{
        color: #2D6CCB;
        font-size: 14px;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.4px;
        text-transform: uppercase;
    }
    h2{
        color: var(--site-heading, #1E2123);
        font-size: 36px;
        font-weight: 700;
        line-height: normal;
        margin-top: 24px;
    }
     h3{
       color: var(--text-grey-light, #555);
        font-size: 16px;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
        margin: 16px 0 24px 0;
    }
    div:first-child{
        padding: 69px 58px;
        width: 53%;
        div{
            width: fit-content;
        }
    }
    img{
        width: 47%;
        border-top-right-radius: 24px;
         border-bottom-right-radius: 24px;
         object-fit: cover;
    }
    @media screen and (max-width:768px) {
        margin: 60px auto auto auto;
        flex-direction: column;
        align-items: center;
        div{
            width: 100% !important;
        }
        img{
            width: 90% !important;
            border-radius: 24px;
            margin-bottom: 20px;
        }
    }
    @media screen and (max-width:425px) {
        div:first-child{
            padding: 40px 20px 20px 20px;
        }
    }
`;