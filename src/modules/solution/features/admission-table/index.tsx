import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import * as Styled from "./table.styles";
import * as Comp from "@/components";
type Props = {
  title: string;
  data: string[];
};

export const AdmissionTable: React.FC<Props> = ({ data, title }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Styled.TableSectionWrapper>
      <Styled.TableHeaderWrapper>
        <h1>{title}</h1>
        <h2>
          Simplify and automate the admissions process for prospective students.
        </h2>
      </Styled.TableHeaderWrapper>
      <Styled.TableBodyWrapper>
        <h3>Privacy & Security</h3>
        {data?.map((row, index) => (
          <Styled.TableRowWrapper key={index}>
            <span>
              <em>
                <FiCheck color="#6772E5" size={24} />
              </em>
              {row}
            </span>
            <span>
              <FiCheck color="#6772E5" size={24} />
            </span>
          </Styled.TableRowWrapper>
        ))}
      </Styled.TableBodyWrapper>
      {visible && (
        <Styled.Service>
          <h6>* Available in Enterprise Plan</h6>
          <h6>** fee may apply</h6>
          <h6>*** Fee may apply</h6>
        </Styled.Service>
      )}
      <Comp.Button
        bg="#fff"
        font="#6772E5"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {!visible ? "See All Features" : "Hide Section"}
      </Comp.Button>
    </Styled.TableSectionWrapper>
  );
};
