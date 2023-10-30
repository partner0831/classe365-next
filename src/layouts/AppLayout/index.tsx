import React from "react";
import * as Section from "@/modules/footer";
import * as Styled from "./appLayout.styles";
import { Header } from "./Header";
import { seo_lists } from "./seo";
import { Seo } from "@/components";

type Props = {
  is_new_book?: boolean;
  name: string;
  title?: string;
  description?: string;
  is_only_footer?: boolean;
  image?: string;
} & React.HTMLAttributes<HTMLElement>;

export const AppLayout: React.FC<Props> = ({
  children,
  is_only_footer,
  is_new_book,
  name,
  title,
  description,
  image,
}) => {
  const getSeoList = () => {
    if (seo_lists[name]) {
      return seo_lists[name];
    } else if (name === "details") {
      return {
        title: "Parasol Finance | " + title,
        description: description,
        image: image,
      };
    } else {
      return {
        title: "",
        description: "",
        image: "",
      };
    }
  };

  const props = getSeoList();

  return (
    <Styled.AppLayoutWrapper>
      <Seo {...props} />
      <Header />
      <Styled.AppContentWrapper>{children}</Styled.AppContentWrapper>
      <Styled.FooterWrapper>
        {!is_only_footer &&
          (is_new_book ? <Section.NewBook /> : <Section.Book />)}
        <Section.Navigation />
      </Styled.FooterWrapper>
    </Styled.AppLayoutWrapper>
  );
};
