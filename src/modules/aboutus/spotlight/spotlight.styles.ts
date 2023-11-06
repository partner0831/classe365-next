import styled from "styled-components";
export const SpotContainer = styled.div`
    background: var(--bg-grey, #F1F6FA);
    width: 100%;
`
export const SpotWrapper = styled.div`
    max-width: 1240px;
    width: 95%;
    margin: auto;
    padding: 80px 0;
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
  
        div{
            width: fit-content;
        }
    }
`;
export const SwiperContainer = styled.div`
max-width: 1240px;
width: 95%;
margin: auto;
    .swiper-slide{
        /* width: 390px; */
        max-width: 394px;
        width: 100%;
    }
  .swiper-pagination{
    display: none;
  }
`

export const SwiperWrapper = styled.div`
    padding:  0 0 146px 0;
    .page-sport{
        max-width: 1240px;
        width: 95%;
        margin: 56px auto auto auto;
    }
    @media screen and (max-width: 768px){
        padding:  0 0 50px 0;
    }
`
export const CustomNavigator = styled.div`
    position: relative;
    display: flex;
    justify-content:end;
    margin-top: 16px;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6772e5;
        font-size: 20px;
        cursor: pointer;
        width: 46px;
        height: 46px;
        border: 1px solid #6772e5;
        border-radius: 9999px;
        &:not(:first-child) {
        margin-left: 12px;
        }
    }

  `;