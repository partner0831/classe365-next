import React from "react";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import * as Comp from "@/components";
import * as Styled from "./404.styles";

export const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <Styled.NotFoundWrapper>
      <h1>404</h1>
      <h3>Oops! Page not found</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue
        pretium faucibus leo nisl nulla pharetra nullam.
      </p>
      <Comp.Button size="sm" onClick={() => router.push("/")}>
        <span>Go to Homepage</span>
        <BsArrowRight />
      </Comp.Button>
    </Styled.NotFoundWrapper>
  );
};
