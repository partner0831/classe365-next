import React from "react";
import * as Shape from "@/components";
import * as Styled from "./toolkit.styles";

type Props = {
  title: string;
  description: string;
};

export const Toolkit: React.FC<Props> = ({ description, title }) => {
  return (
    <Styled.ToolkitWrapper>
      <Styled.ToolkitTitleWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
      </Styled.ToolkitTitleWrapper>
      <Styled.ToolkitImageWrapper>
        <div>
          <img src="/assets/images/toolkit.png" alt="" />
          <Shape.Shape1 className="shape-1" />
          <Shape.Shape4 className="shape-2" />
          <Shape.Shape6 className="shape-3" />
          <Shape.Shape12 className="shape-4" />
          <Shape.Shape13 className="shape-5" />
          <Shape.Shape10 className="shape-6" />
        </div>
      </Styled.ToolkitImageWrapper>
    </Styled.ToolkitWrapper>
  );
};
