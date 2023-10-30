import React from "react";
import * as Styled from "./search.styles";
import { SearchIcon } from "@/components";

export const Search: React.FC = () => {
  return (
    <Styled.SearchWrapper>
      <h1>Free Business and Marketing resources</h1>
      <Styled.SearchInputWrapper>
        <input type="text" />
        <SearchIcon />
      </Styled.SearchInputWrapper>
      <Styled.SearchFilterWrapper>
        <a href="#templates">Templates</a>
        <a href="#help-articles">Help Articles</a>
        <a href="#blog-articles">Blog Articles</a>
        <a href="#roi">ROI Calculator</a>
        <a href="#help-videos">Help Videos</a>
        <a href="#playbook">Play Book</a>
      </Styled.SearchFilterWrapper>
    </Styled.SearchWrapper>
  );
};
