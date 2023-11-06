import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import * as Styled from "./table.styles";
import * as Comp from "@/components";
type Props = {
  title: string;
  subtitle: string;
  data: any;
};

export const AdmissionTable: React.FC<Props> = ({ data, title, subtitle }) => {
  const [visible, setVisible] = useState(false);
  const renderTableRows = (key: number, row: string) => {
    return (
      <Styled.TableRowWrapper key={key}>
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
    );
  };
  return (
    <Styled.TableSectionWrapper>
      <Styled.TableHeaderWrapper>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </Styled.TableHeaderWrapper>
      {data?.map((item: any, index: any) => {
        if (visible) {
          return (
            <Styled.TableBodyWrapper key={index}>
              <h3>{item.title}</h3>
              {item.content?.map((row: string, key: number) => {
                if (!visible ? key <= 7 : key >= 0)
                  return renderTableRows(key, row);
              })}
            </Styled.TableBodyWrapper>
          );
        } else {
          const count =
            data[0].content.length >= 5
              ? 1
              : data[0].content.length !== 0
              ? 2
              : 3;
          if (index < count) {
            return (
              <Styled.TableBodyWrapper key={index}>
                <h3>{item.title}</h3>
                {item.content?.map((row: string, key: number) => {
                  if (
                    !visible
                      ? key <= (data[0].content.length >= 5 ? 5 : 2)
                      : key >= 0
                  )
                    return renderTableRows(key, row);
                })}
              </Styled.TableBodyWrapper>
            );
          }
        }
      })}
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
