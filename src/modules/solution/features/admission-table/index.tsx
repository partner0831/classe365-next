import React from "react";
import { FiCheck } from "react-icons/fi";
import * as Styled from "./table.styles";

type Props = {
  title: string;
  data: string[];
};

export const AdmissionTable: React.FC<Props> = ({ data, title }) => {
  return (
    <Styled.TableSectionWrapper>
      <Styled.TableHeaderWrapper>
        <span>{title}</span>
        <span></span>
      </Styled.TableHeaderWrapper>
      <Styled.TableBodyWrapper>
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
    </Styled.TableSectionWrapper>
  );
};
