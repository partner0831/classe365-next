import React from "react";
import * as Styled from "../articles/articles.styles";
import { videos } from "../articles/data";

export const HelpVideos: React.FC = () => {
  return (
    <Styled.HelpArticlesWrapper id="help-videos">
      <h1>
        <p>Help Videos</p>
        <span>View All Articles</span>
      </h1>
      <Styled.HelpArticlesGridWrapper>
        {videos.map((item, key) => (
          <Styled.HelpArticleGridItem key={key}>
            <span>
              <img src={item.image} alt="articles" />
            </span>
            <div className="videos">
              <h2>{item.title}</h2>
            </div>
          </Styled.HelpArticleGridItem>
        ))}
      </Styled.HelpArticlesGridWrapper>
    </Styled.HelpArticlesWrapper>
  );
};
