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
          transition: var(--component-transition);
          background-color: white;
        }

        button:hover {
          background-color: var(--color-light);
          box-shadow: var(--component-box-shadow);
        }

        button:active {
          background-color: white;
        }

        .selected {
          box-shadow: var(--component-box-shadow);
        }

        .container {
          position: relative;
          width: var(--music-service-button-size);
          height: var(--music-service-button-size);
        }

        .icon {
          font-size: var(--music-service-button-size);
          color: var(--color-dark);
        }

        .authenticated-checkmark {
          position: absolute;
          right: 0;
          bottom: 0;

          display: grid;
          justify-content: center;
          align-items: center;

          font-size: calc(var(--music-service-button-size) / 2.5);
          color: var(--color-success);
        }
      `}</style>
    </>
  );
};

export default MusicSourceButton;
