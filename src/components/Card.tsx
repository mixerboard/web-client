import { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          display: grid;
          grid-gap: var(--component-padding);
          border-radius: var(--component-border-radius);
          box-shadow: var(--component-box-shadow);
          padding: var(--component-padding);
          max-width: var(--card-max-width);
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Card;
