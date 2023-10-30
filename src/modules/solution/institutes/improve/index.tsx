import React, { useState } from "react";
import { STRAPI_API } from "@/config";
import * as Styled from "./improve.styles";

type Props = {
  title: string;
  data: {
    title: string;
    description: string;
    image: any;
  }[];
};

export const Improve: React.FC<Props> = ({ title, data }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Styled.ImproveSectionWrapper>
      <h1>{title}</h1>
      <Styled.ImproveContainer>
        <Styled.ImproveListWrapper id="improve-navbar">
          {data?.map((item, key) => (
            <Styled.ImproveListItem
              key={key}
              href={"#improve-image" + key}
              onClick={() => setSelected(key)}
              className={key === selected ? "active" : ""}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                <img src={STRAPI_API + item.image?.url} alt="" />
              </div>
            </Styled.ImproveListItem>
          ))}
        </Styled.ImproveListWrapper>
        {data && (
          <Styled.ImproveImageWrapper>
            <div
              style={{
                backgroundImage: `url(${
                  STRAPI_API + data[selected]?.image?.url
                })`,
              }}
            >
              <img src={STRAPI_API + data[selected]?.image?.url} alt="" />
            </div>
          </Styled.ImproveImageWrapper>
        )}
      </Styled.ImproveContainer>
    </Styled.ImproveSectionWrapper>
  );
};
