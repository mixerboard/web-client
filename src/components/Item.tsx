import { FC } from "react";
import { MdClose } from "react-icons/md";

interface Props {
  onDelete?: () => void;
}

const Item: FC<Props> = ({ onDelete, children }) => {
  return (
    <>
      <div>
        <span>{children}</span>
        {onDelete && (
          <button onClick={onDelete}>
            <MdClose />
          </button>
        )}
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 1fr min-content;
          box-shadow: var(--component-box-shadow);
          border-radius: var(--component-border-radius);
        }

        span {
          padding: calc(var(--component-padding) / 2);
          overflow: hidden;
        }

        button {
          height: 100%;
          width: 2.5rem;
          display: grid;
          justify-content: center;
          align-items: center;
          background-color: white;
          border-radius: var(--component-border-radius);
          transition: var(--component-transition);
          border: none;
        }

        button:hover {
          background-color: var(--color-error);
          box-shadow: inset var(--component-box-shadow);
        }
      `}</style>
    </>
  );
};

export default Item;
