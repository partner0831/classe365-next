import React from "react";
import * as Styled from "./story.styles";

export const Story: React.FC = () => {
  return (
    <Styled.StoryWrapper>
      <p>OUR STORY</p>
      <h1>
        We Grew From Being a Cloud-Based Startup to a Major Player in the EdTech
        Industry
      </h1>
      <div>
        <div>
          <p>our vission</p>
          <h2>Redefining the Future of Learning For All</h2>
        </div>
        <div>
          <p>our mission</p>
          <h2>
            Empower educational Institutions with Innovative, User-Friendly, and
            Accessible Solutions
          </h2>
        </div>
      </div>
      <img src={"./assets/images/aboutus/startup.png"} width="90%" alt="img" />
    </Styled.StoryWrapper>
  );
};
