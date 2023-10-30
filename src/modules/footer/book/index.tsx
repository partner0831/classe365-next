import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Comp from "@/components";
import * as Styled from "./book.styles";

export const Book: React.FC = () => {
  return (
    <Styled.BookSectionWrapper>
      <Styled.BookSectionContainer>
        <h2>Start with</h2>
        <h1>$50/month</h1>
        <p>
          {
            "Customized Solutions for Your Institution's Needs - Pay Only for What You Use"
          }
        </p>
        <Styled.BookButtoWrapper>
          <Comp.Button bg="#F1F6FA" border="#F1F6FA" font="#6772E5">
            <span>Try For Free</span>
            <BsArrowRight />
          </Comp.Button>
          <Comp.Button bg="transparent" border="#F1F6FA" font="#F1F6FA">
            Book a Demo
          </Comp.Button>
        </Styled.BookButtoWrapper>
      </Styled.BookSectionContainer>
      <Styled.BookImageWrapper>
        <img src="/assets/images/footer/book.png" alt="Book" />
      </Styled.BookImageWrapper>
    </Styled.BookSectionWrapper>
  );
};
