import { FC } from "react";

const Main: FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <style jsx>{`
        main {
          display: grid;
          grid-gap: var(--component-padding);
          justify-items: center;
          margin: var(--main-margin);
        }
      `}</style>
    </>
  );
};

export default Main;
