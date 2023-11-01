import React from "react";
import * as Comp from "@/components";
import * as Styled from "./review.styles";
import { introdata } from "./data";
export const Review: React.FC = () => {
  return (
    <Styled.ReviewWrapper>
      {introdata.map((item, key) => (
        <Comp.IntroCard
          key={key + 1}
          header={item.header}
          name={item.name}
          role={item.role}
          company={item.company}
          feature={item.feature}
          description={item.description}
          content={item.content}
          color={item.color}
        />
      ))}
    </Styled.ReviewWrapper>
  );
};
