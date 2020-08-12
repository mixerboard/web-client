import { FC } from "react";

interface Props {
  variant?: color;
}

const Alert: FC<Props> = ({ variant = "primary", children }) => {
  const cssColorVariable = `var(--color-${variant})`;

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
