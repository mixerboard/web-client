import { FC } from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

interface ItemResultInnerProps {
  result: "pushed" | "failed";
  text: string;
}

const ItemResultInner: FC<ItemResultInnerProps> = ({ result, text }) => (
  <>
    <span className="container">
      <span className={"icon " + result}>
        {result === "pushed" ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
      </span>
      {text}
    </span>
    <style jsx>{`
      .container {
        display: grid;
        grid-gap: calc(var(--component-padding) / 2);
        grid-auto-flow: column;
        grid-auto-column: min-content 1fr;
        justify-content: start;
      }

      .icon {
        display: grid;
        align-items: center;
      }

      .pushed {
        color: var(--color-success);
      }

      .failed {
        color: var(--color-error);
      }
    `}</style>
  </>
);

export default ItemResultInner;
