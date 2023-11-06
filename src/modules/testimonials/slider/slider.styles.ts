import styled from "styled-components";

export const SliderWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: 109px auto auto auto;
  .swiper-slide{
    width: fit-content;
  }
  .swiper-pagination{
    display: none;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }

`;
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
