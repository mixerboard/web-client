import { FC } from "react";
import Header from "components/Header";
import Image from "components/Image";
import Main from "components/Main";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header
        logoImage={
          <Image
            src="https://raw.githubusercontent.com/mixerboard/brand/master/logos/logo-1x.png"
            alt="Mixerboard logo"
          />
        }
      />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
