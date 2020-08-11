import { FC, ReactElement, ButtonHTMLAttributes } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon: ReactElement;
  authenticated?: boolean;
  selected?: boolean;
}
const MusicSourceButton: FC<Props> = ({
  name,
  icon,
  authenticated = false,
  selected = false,
  ...rest
}) => {
  return (
    <>
      <button title={name} className={selected && "selected"} {...rest}>
        <span className="container">
          <span className="icon">{icon}</span>
          {authenticated && (
            <span className="authenticated-checkmark">
              <IoIosCheckmarkCircle />
            </span>
          )}
        </span>
      </button>
      <style jsx>{`
        button {
          display: grid;
          border: none;
          padding: var(--component-padding);
          background-color: white;
          box-shadow: var(--component-box-shadow);
          transition: var(--component-transition);
        }

        button:hover {
          background-color: var(--color-light);
        }

        .selected {
          outline: var(--component-border) var(--color-primary);
          box-shadow: inset var(--component-box-shadow);
        }

        .container {
          position: relative;
          width: 50px;
          height: 50px;
        }

        .icon {
          font-size: 50px;
          color: var(--color-dark);
        }

        .authenticated-checkmark {
          position: absolute;
          right: 0;
          bottom: 0;

          display: grid;
          justify-content: center;
          align-items: center;

          font-size: 20px;
          color: var(--color-success);
        }
      `}</style>
    </>
  );
};

export default MusicSourceButton;
