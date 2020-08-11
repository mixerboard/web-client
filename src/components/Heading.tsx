import { FC } from "react";

interface Props {
  variant?: colors;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: FC<Props> = ({ variant = "dark", level = 1, children }) => {
  const cssColorVariable = `var(--color-${variant})`;

  return (
    <>
      {level === 1 ? (
        <h1>{children}</h1>
      ) : level === 2 ? (
        <h2>{children}</h2>
      ) : level === 3 ? (
        <h3>{children}</h3>
      ) : level === 4 ? (
        <h4>{children}</h4>
      ) : level === 5 ? (
        <h5>{children}</h5>
      ) : (
        <h6>{children}</h6>
      )}
      <style jsx>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "IBM Plex Mono", monospace;
          color: ${cssColorVariable};
        }
      `}</style>
    </>
  );
};

export default Heading;
