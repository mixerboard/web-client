import { FC } from "react";
import { AppProps } from "next/app";
import Layout from "composites/Layout";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default CustomApp;
