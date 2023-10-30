import React from "react";
import * as Styled from "../articles/articles.styles";
import { blogs } from "../articles/data";
import { ArrowRightIcon } from "@/components";

export const BlogArticles: React.FC = () => {
  return (
    <Styled.HelpArticlesWrapper id="blog-articles">
      <h1>
        <p>Blog Articles</p>
        <span>View All Articles</span>
      </h1>
      <Styled.HelpArticlesGridWrapper>
        <Styled.HelpArticlesGridAreaWrapper>
          <div className="left">
            <h3>Newest Blog Article Goes Here</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique ac ornare
              natoque imperdiet lobortis dui nullam cursus in. Facilisi nibh in
              malesuada tortor.
            </p>
            <a href="#">
              <span>Read More</span>
              <ArrowRightIcon />
            </a>
          </div>
          <div className="right"></div>
        </Styled.HelpArticlesGridAreaWrapper>
        {blogs.map((item, key) => (
          <Styled.HelpArticleGridItem key={key}>
            {/* <span>
              <img src={item.image} alt="articles" />
            </span> */}
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
