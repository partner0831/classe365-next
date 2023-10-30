import React, { useState } from "react";
import Switch from "react-switch";
import { GoCheckCircle, GoCircle } from "react-icons/go";
import * as Data from "./data";
import * as Styled from "./services.styles";

export const Services: React.FC = () => {
  const { services } = Data;
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  return (
    <Styled.SevicesWrapper id="service">
      <Styled.ServicesContainer>
        <Styled.ServicesTitleWrapper>
          <h1>Professional Services</h1>
          <Styled.SwitchWrapper>
            <span>Virtual</span>
            <Switch
              handleDiameter={36}
              onChange={handleChange}
              checked={checked}
              className="react-switch"
              onColor="#6772E5"
              height={44}
              width={94}
              checkedIcon={<span className="handle-label">On</span>}
              uncheckedIcon={<span className="handle-label">Off</span>}
            />
            <span>On-site</span>
          </Styled.SwitchWrapper>
        </Styled.ServicesTitleWrapper>
      </Styled.ServicesContainer>
      <Styled.ServiceTableWrapper>
        <Styled.TableHeaderWrapper>
          <div className="row1">Professional services</div>
          <div className="row2">
            <GoCheckCircle /> Virtual
          </div>
          <div className="row3">
            <GoCircle /> On-Site
          </div>
        </Styled.TableHeaderWrapper>
        <Styled.TableBodyWrapper>
          {services.map((row, index) => (
            <Styled.TableRowWrapper key={index}>
              <div className="row1">{row.row1}</div>
              <div className="row2">{row.row2}</div>
              <div className="row3">{row.row3}</div>
            </Styled.TableRowWrapper>
          ))}
        </Styled.TableBodyWrapper>
      </Styled.ServiceTableWrapper>
    </Styled.SevicesWrapper>
  );
};
