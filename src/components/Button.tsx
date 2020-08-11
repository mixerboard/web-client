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
          grid-gap: calc(var(--component-padding) / 2);

          color: ${cssColorVariable};
          background-color: white;
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
          box-shadow: initial;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default Button;
