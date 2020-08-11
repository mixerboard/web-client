import { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          padding: var(--component-padding);
          border-radius: var(--component-border-radius);
          box-shadow: var(--component-box-shadow);
        }
      `}</style>
    </>
  );
};

export default Card;
