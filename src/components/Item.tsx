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
          align-items: center;

          box-shadow: var(--component-box-shadow);
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
          border: none;
          background-color: white;
        }

        button:hover {
          background-color: var(--color-error);
        }
      `}</style>
    </>
  );
};

export default Item;
