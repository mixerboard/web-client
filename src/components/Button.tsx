import { FC } from "react";
import { RiLoader4Line } from "react-icons/ri";

interface Props {
  type?: colors;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({
  type = "primary",
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  const cssColorVariable = `var(--color-${type})`;

  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {loading && (
          <span className="spin">
            <RiLoader4Line />
          </span>
        )}
        {children}
      </button>
      <style jsx>{`
        button {
          display: grid;
          grid-auto-flow: column;
          grid-gap: calc(var(--component-padding) / 2);
          align-items: center;

          background-color: white;
          color: ${cssColorVariable};
          border: var(--component-border) ${cssColorVariable};
          padding: calc(var(--component-padding) / 2);
          border-radius: var(--component-border-radius);
          transition: var(--component-transition);
        }

        button:hover,
        button:active {
          box-shadow: var(--component-box-shadow);
        }

        button:disabled {
          color: var(--color-grey);
          border-color: var(--color-grey);
          box-shadow: none;
          cursor: not-allowed;
        }

        .spin {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: spin 2s infinite linear;
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

export default Button;
