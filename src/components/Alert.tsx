import { FC } from "react";

interface Props {
  type?: colors;
}

const Alert: FC<Props> = ({ type = "primary", children }) => {
  const cssColorVariable = `var(--color-${type})`;

  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          padding: var(--component-padding);
          border-radius: var(--component-border-radius);
          box-shadow: var(--component-box-shadow);
          border: var(--component-border) ${cssColorVariable};
        }
      `}</style>
    </>
  );
};

export default Alert;
