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
        --icon-container-size: calc(var(--music-service-button-size) / 2);
        --icon-checkmark-size: calc(var(--icon-container-size) / 2.5);

        button {
          display: grid;
          justify-items: center;
          align-items: center;
          border: none;
          padding: var(--component-padding);
          transition: var(--component-transition);
          width: var(--music-service-button-size);
          height: var(--music-service-button-size);
          background-color: white;
        }

        button:hover {
          background-color: var(--color-light);
          box-shadow: var(--component-box-shadow);
        }

        button:active {
          background-color: initial;
        }

        .selected {
          box-shadow: var(--component-box-shadow);
          border: var(--component-border) var(--color-dark);
        }

        .container {
          position: relative;
          width: var(--icon-container-size);
          height: var(--icon-container-size);
        }

        .icon {
          font-size: var(--icon-container-size);
          color: var(--color-dark);
        }

        .authenticated-checkmark {
          display: grid;
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: var(--icon-checkmark-size);
          color: var(--color-success);
        }
      `}</style>
    </>
  );
};

export default MusicSourceButton;
