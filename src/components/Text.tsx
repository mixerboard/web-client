import { FC } from "react";

interface Props {
  type?: colors;
}

const Text: FC<Props> = ({ type = "dark", children }) => {
  const cssColorVariable = `var(--color-${type})`;

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
