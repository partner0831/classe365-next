import { styled } from "styled-components";

export const FeatureCardWrapper = styled.div`
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  padding: 14px;
  background: #fff;
  align-items: center;
  display: flex;
  img {
    height: 71px;
    width: auto;
    margin-right: 16px;
  }
  div {
    width: 184px;
    flex: 1;
  }
  h5 {
    color: #555;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    color: #1f3ce0;
    font-size: 14px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
