import React from "react";
import * as Styled from "../articles/articles.styles";
import { template } from "../articles/data";

export const Templates: React.FC = () => {
  return (
    <Styled.HelpArticlesWrapper id="templates">
      <h1>
        <p>Templates</p>
        <span>See all template</span>
      </h1>
      <Styled.HelpArticlesGridWrapper>
        <Styled.HelpArticlesGridAreaWrapper className="template">
          <div className="left">
            <h3>Newest Blog Article Goes Here</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique ac ornare
              natoque imperdiet lobortis dui nullam cursus in. Facilisi nibh in
              malesuada tortor.
            </p>
            <a href="#">
              <span>Use This Template</span>
            </a>
          </div>
          <div className="right"></div>
        </Styled.HelpArticlesGridAreaWrapper>
        {template.map((item, key) => (
          <Styled.HelpArticleGridItem key={key}>
            {/* <span>
          <img src={item.image} alt="articles" />
        </span> */}
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <a href="#">Use This Template </a>
          </Styled.HelpArticleGridItem>
        ))}
      </Styled.HelpArticlesGridWrapper>
    </Styled.HelpArticlesWrapper>
  );
};
