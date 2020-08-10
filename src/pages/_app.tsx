import { FC } from "react";
import { AppProps } from "next/app";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
