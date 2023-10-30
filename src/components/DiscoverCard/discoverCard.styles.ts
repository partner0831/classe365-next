import { styled } from "styled-components";

export const DiscoverCardWrapper = styled.div`
  max-width: 402px;
  width: 100%;
  padding: 60px 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DiscoverContent = styled.div`
  h1 {
    color: #000;
    font-size: 96px;
    font-weight: 400;
    line-height: 50px;
  }
  h4 {
    color: #3b3f42;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin-top: -20px;
  }
  p {
    color: #3b3f42;
    font-size: 18px;
    margin-top: 24px;
    font-weight: 400;
    line-height: 30px;
  }
`;

export const DiscoverOwner = styled.div`
  margin-top: 40px;
  h4 {
    padding-bottom: 20px;
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 9999px;
    margin-bottom: 8px;
  }
  h5 {
    color: #555;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    color: #555;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
  }
`;
