import React from "react";
import * as Styled from "./articles.styles";
import { articles } from "./data";

export const HelpArticles: React.FC = () => {
  return (
    <Styled.HelpArticlesWrapper id="help-articles">
      <h1>
        <p>Help Articles</p>
        <span>View All Articles</span>
      </h1>
      <Styled.HelpArticlesGridWrapper>
        {articles.map((item, key) => (
          <Styled.HelpArticleGridItem key={key}>
            <span>
              <img src={item.image} alt="articles" />
            </span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Styled.HelpArticleGridItem>
        ))}
      </Styled.HelpArticlesGridWrapper>
    </Styled.HelpArticlesWrapper>
  );
};
