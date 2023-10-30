import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { AppContext } from "@/context";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "nprogress/nprogress.css";

const TopProgressBar = dynamic(
  () => {
    return import("@/components/TopProgressBar");
  },
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <TopProgressBar />
      <Component {...pageProps} />
    </AppContext>
  );
}
