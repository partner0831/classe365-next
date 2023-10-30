import styled from "styled-components";

export const ScheduleWrapper = styled.div`
  max-width: 1080px;
  width: 95%;
  border-radius: 24px;
  background: #f1f6fa;
  margin: 65px auto 0;
  display: flex;
  flex-direction: column;
  padding: 55px 20px;
  text-align: center;
  .schedule-button {
    width: fit-content;
    margin: auto;
  }
  h1 {
    color: #1e2123;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
    text-transform: capitalize;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
