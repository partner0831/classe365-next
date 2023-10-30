import React from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/contact";

const ContactUs: React.FC = () => {
  return (
    <AppLayout name="contact">
      <Section.ContactForm />
      <Section.Location />
    </AppLayout>
  );
};

export default ContactUs;
