import { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: colors;
}

const Button: FC<Props> = ({ variant = "primary", children, ...rest }) => {
  const cssColorVariable = `var(--color-${variant})`;

  return (
    <>
      <button {...rest}>{children}</button>
      <style jsx>{`
        button {
          display: grid;
          grid-auto-flow: column;
          grid-gap: var(--component-padding);

          background-color: white;
          color: ${cssColorVariable};
          border: var(--component-border) ${cssColorVariable};
          padding: var(--component-padding);
          border-radius: var(--component-border-radius);
          transition: var(--component-transition);
        }

        button:hover {
          background-color: var(--color-light);
          box-shadow: var(--component-box-shadow);
        }

        button:active {
          background-color: white;
        }

        button:disabled {
          color: var(--color-grey);
          border-color: var(--color-grey);
          cursor: not-allowed;
          box-shadow: initial;
        }
      `}</style>
    </>
  );
};

export default Button;
