import styled from "styled-components";

export const ReviewWrapper = styled.div`  
    max-width: 1240px;
    width: 95%;
    margin: auto;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    & > :not(:first-child) {
        margin-left: 52px;
    }
    @media screen and (max-width: 768px) {
        margin-top: 60px;
        flex-direction: column;
        align-items: center;
        & > :not(:first-child) {
            margin: 52px 0 0 0;
        }
    }
`;