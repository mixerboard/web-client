import { FC } from "react";

const Main: FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <style jsx>{`
        main {
          display: grid;
          justify-content: center;
          margin: 2vw;
        }
      `}</style>
    </>
  );
};

export default Main;
