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
          justify-items: center;
        }

        .logo-container {
          height: var(--header-height);
        }
      `}</style>
    </>
  );
};

export default Header;
