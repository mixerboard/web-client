import { FC } from "react";

interface Props {
  variant?: colors;
}

const Text: FC<Props> = ({ variant = "dark", children }) => {
  const cssColorVariable = `var(--color-${variant})`;

  return (
    <>
      <p>{children}</p>
      <style jsx>{`
        p {
          font-family: "IBM Plex Sans", sans-serif;
          color: ${cssColorVariable};
        }
      `}</style>
    </>
  );
};

export default Text;
