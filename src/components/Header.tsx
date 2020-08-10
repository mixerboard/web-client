import { FC, ReactElement } from "react";

interface Props {
  logoImage: ReactElement;
}

const Header: FC<Props> = ({ logoImage }) => {
  return (
    <>
      <header>{logoImage}</header>
      <style jsx>{`
        header {
          display: grid;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Header;
