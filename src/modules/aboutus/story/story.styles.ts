import styled from "styled-components";

export const StoryWrapper = styled.div`
    max-width: 1240px;
    width: 95%;
    margin: 114px auto auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: normal;
    p{
        color: var(--bright-blue, #6772E5);
        font-size: 14px;
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
        font-weight: 700;
        line-height: normal;
    }
    h2{
        color: var(--site-heading, #1E2123);
        font-size: 24px;
        font-weight: 500;
        line-height: 32px; /* 133.333% */
    }
    div{
        margin:88px 0 0 0;
        display: flex ;
        padding: 0 40px;
        div{
            width: 50%;
            display: flex;
            flex-direction: column;
        }
        h2{
            margin-top: 16px;
        }
    }
    img{
        margin-top: 44px;
        border-radius: 30px;
    }
    @media screen and (max-width:768px) {
        margin: 50px auto auto auto;
        div{
            padding: 0 20px;

            margin: 30px 0 0 0;
            flex-direction: column !important;
            div{
                width: 100%;
            }
        }
        h1{
            font-size: 24px;
        }
        h2{
            font-size:18px;
        }
    }
    @media screen and (max-width:425px) {
        div{
            padding: 0 10px;
        }
        h2{
            font-size: 16px;
        }
    }
`;