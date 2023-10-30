import React from "react";
import * as Data from "./data";
import * as Styled from "./contact.styles";

export const Location: React.FC = () => {
  const { locations } = Data;
  return (
    <Styled.LocationWrapper>
      <h1>Our Locations</h1>
      <p>We have 4 offices around the world, in case you want to visit.</p>
      <Styled.LocationGridWrapper>
        {locations.map((item, key) => (
          <Styled.LocationCardWrapper key={key}>
            <div>
              <img src={item.flag} alt="" />
              <h4>{item.title}</h4>
            </div>
            <p>{item.location}</p>
            <br />
            <p>
              <b>Tel:</b> {item.tel}
            </p>
            <p>{item.timezone}</p>
          </Styled.LocationCardWrapper>
        ))}
      </Styled.LocationGridWrapper>
      <Styled.ContactEmail>
        Contact us via email: sales@classe365.com
      </Styled.ContactEmail>
    </Styled.LocationWrapper>
  );
};
