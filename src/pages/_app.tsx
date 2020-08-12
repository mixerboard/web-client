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
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans&display=swap");

        :root {
          --primary-font: "IBM Plex Sans", sans-serif;
          --secondary-font: "IBM Plex Mono", monospace;

          --color-primary: #8cbce9;
          --color-error: #ff8f85ff;
          --color-success: #75e6cfff;
          --color-light: #faf2dc;
          --color-dark: #2e3138;
          --color-grey: #a5aab6;

          --component-box-shadow: 0 0 2px var(--color-grey);
          --component-border: 2px solid;
          --component-border-radius: 0px;
          --component-padding: 15px;
          --component-transition: all 0.2s;

          --card-max-width: 500px;
          --header-height: 3rem;
          --main-margin: 2vw;
          --music-service-button-size: 50px;
          --spinner-animation-length: 2s;
        }

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
