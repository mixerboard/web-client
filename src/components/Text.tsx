import { FC } from "react";

interface Props {
  variant?: color;
}

const Text: FC<Props> = ({ variant = "dark", children }) => {
  const cssColorVariable = `var(--color-${variant})`;

  return (
    <>
      <p>{children}</p>
      <style jsx>{`
        p {
          font-family: var(--font-primary);
          color: ${cssColorVariable};
          overflow: auto;
        }
      `}</style>
    </>
  );
};

export default Text;
