import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import * as Comp from "@/components";
import * as Styled from "./contact.styles";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    cEmail: "",
    number: "",
    country: "",
    category: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {};

  return (
    <Styled.ContactFormWrapper>
      <Styled.ContactDetailWrapper>
        <Styled.ContactDescWrapper>
          <img src="/assets/images/contact/icon.png" alt="" />
          <h1>
            <span>Get in touch</span> with Classe365
          </h1>
          <p>
            {
              "Interested in managing your learner journey digitally? We'd love to hear from you. Reach out to us and our experts will get in touch with you."
            }
          </p>
          <h3>
            <span>sales@classe365.com</span>{" "}
            <span>
              <BiCopy size={20} color="#7C7C7C" />
            </span>
          </h3>
        </Styled.ContactDescWrapper>
        <Styled.ContactAwardWrapper>
          <div>
            <img src="/assets/images/contact/stars.png" alt="" />
            <p>
              Most awarded EdTech company of 2021/22, including being part of
              Top 65 fastest growing companies of 2021 in APAC
            </p>
          </div>
          <div>
            <div>
              <img src="/assets/images/features/feature.png" alt="" />
            </div>
            <div>
              <img src="/assets/images/features/2-old.png" alt="" />
            </div>
            <div>
              <img src="/assets/images/features/3-old.png" alt="" />
            </div>
          </div>
        </Styled.ContactAwardWrapper>
      </Styled.ContactDetailWrapper>
      <Styled.ContactFormContainer>
        <h2>Send us a quick query</h2>
        <Styled.ContactForm>
          <Styled.ContactInputGroup>
            <Comp.Input
              onChange={handleInputChange}
              value={form.name}
              label="Name"
              name="name"
            />
            <Comp.Input
              onChange={handleInputChange}
              value={form.company}
              label="Company"
              name="company"
            />
          </Styled.ContactInputGroup>
          <Styled.ContactInputGroup>
            <Comp.Input
              onChange={handleInputChange}
              value={form.email}
              label="Email"
              name="email"
            />
            <Comp.Input
              onChange={handleInputChange}
              value={form.cEmail}
              label="Confirm email"
              name="cEmail"
            />
          </Styled.ContactInputGroup>
          <Styled.ContactInputGroup>
            <Comp.Input
              onChange={handleInputChange}
              value={form.number}
              label="Contact Number"
              name="number"
            />
            <Comp.Select
              onChange={handleSelectChange}
              options={[]}
              label="Country"
              value={form.country}
            />
          </Styled.ContactInputGroup>
          <Comp.Select
            onChange={handleSelectChange}
            options={[]}
            label="Category"
            value={form.category}
          />
          <Comp.Input
            onChange={handleInputChange}
            value={form.subject}
            label="Subject"
            name="subject"
          />
          <Comp.TextArea
            onTextAreaChange={handleTextAreaChange}
            value={form.message}
            label="Message"
            name="message"
          />
          <Comp.Button
            size="sm"
            onClick={handleSubmit}
            className="submit-button"
          >
            Submit
          </Comp.Button>
        </Styled.ContactForm>
      </Styled.ContactFormContainer>
    </Styled.ContactFormWrapper>
  );
};
