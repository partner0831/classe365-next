import React from "react";
import * as Styled from "./playbook.styles";
import Image from "next/image";

export const Playbook: React.FC = () => {
  return (
    <Styled.PlaybookWrapper id="playbook">
      <div>
        <h1>Digital Transformation Playbook</h1>
        <p>
          Developed through intense research, this framework will help you
          achieve 100% digital transformation at your institution
        </p>
      </div>
      <Image
        src={"/assets/images/free/playbook.png"}
        alt="playbook"
        width={450}
        height={293}
      />
    </Styled.PlaybookWrapper>
  );
};
