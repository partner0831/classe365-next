import styled from "styled-components";

export const EducationWrapper = styled.div`
  
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
    div{
        margin-top: 63px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            width: 52.5%;
            margin-right: 82px;
            object-fit: contain;
        }
        span{
            color: var(--text-grey-dark, #3B3F42);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
        }
 
    }
    @media screen and (max-width:768px){
        div{
            flex-direction: column;
            img{
                width: 100%;
                margin: 0 0 20px 0;
            }
           
        }
        h1{
            font-size: 24px;
        }
       
    }
    @media screen and (max-width:425px){
        div{
            margin-top: 30px;
            /* span{
                font-size: 14px;
            } */
        }
        /* h1{
            font-size: 24px;
        } */
    }
`;