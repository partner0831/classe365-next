import React from "react";
import { InlineWidget } from "react-calendly";
import * as Styled from "./calendar.styles";

export const Calendar: React.FC = () => {
  return (
    <Styled.CalendarWrapper>
      <h1>Private Demo</h1>
      <p>
        {
          "Can't make it to our live webinars? Why not book a live demo with our product team.Check the availability and book now."
        }
      </p>
      <InlineWidget
        url="https://calendly.com/classe365_test"
        styles={{ height: 800 }}
      />
    </Styled.CalendarWrapper>
  );
};
