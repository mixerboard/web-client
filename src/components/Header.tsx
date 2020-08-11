import { FC, ReactElement } from "react";
import Link from "next/link";

interface Props {
  logoImage: ReactElement;
}

const Header: FC<Props> = ({ logoImage }) => {
  return (
    <>
      <header>
        <Link href="/">
          <a className="logo-container">{logoImage}</a>
        </Link>
      </header>
      <style jsx>{`
        header {
          display: grid;
          justify-content: center;
          height: 3rem;
        }

        .logo-container {
          height: 3rem;
        }
      `}</style>
    </>
  );
};

export default Header;
