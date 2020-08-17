import { FC } from "react";
import Header from "components/Header";
import Image from "components/Image";
import Main from "components/Main";
import Head from "next/head";

interface Props {
  title?: string;
}
const Layout: FC<Props> = ({ title = "Mixerboard", children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header
      logoImage={
        <Image
          src="https://raw.githubusercontent.com/mixerboard/brand/master/logos/logo-0.75x.png"
          alt="Mixerboard logo"
        />
      }
    />
    <Main>{children}</Main>
  </>
);

export default Layout;
