import { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: color;
  link?: boolean;
}

const Button: FC<Props> = ({
  variant = "primary",
  link = false,
  children,
  ...rest
}) => {
  const cssColorVariable = `var(--color-${variant})`;

  return (
    <>
      <button className={link && "link"} {...rest}>
        {children}
      </button>
      <style jsx>{`
        button {
          display: grid;
          grid-auto-flow: column;
          grid-gap: var(--component-padding);
          justify-content: center;

          background-color: white;
          color: ${cssColorVariable};
          border: var(--component-border) ${cssColorVariable};
          padding: var(--component-padding);
          border-radius: var(--component-border-radius);
          transition: var(--component-transition);
        }

        button:enabled:hover {
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

        .link {
          border: none;
        }

        .link:enabled:hover {
          background-color: white;
          box-shadow: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Button;
