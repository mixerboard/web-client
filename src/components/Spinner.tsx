import { RiLoader4Line } from "react-icons/ri";
import { FC } from "react";

interface Props {
  variant?: colors;
}

const Spinner: FC<Props> = ({ variant = "primary" }) => {
  const cssColorVariable = `var(--color-${variant})`;

  return (
    <>
      <span>
        <RiLoader4Line />
      </span>
      <style jsx>{`
        span {
          color: ${cssColorVariable};
          display: grid;
          align-items: center;
          justify-content: center;
          animation: 2s spin infinite linear;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Spinner;
