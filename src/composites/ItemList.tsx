import { FC, ReactElement, useState } from "react";
import Alert from "composites/Alert";
import Button from "./Button";

interface Props {
  items: ReactElement[];
  cutoff: number;
}
const ItemList: FC<Props> = ({ items, cutoff }) => {
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) {
    return <Alert variant="error">No items</Alert>;
  }

  return (
    <>
      <div>
        {items.slice(0, expanded ? items.length : cutoff)}
        <Button link onClick={() => setExpanded(!expanded)}>
          {expanded ? "Less" : `+${items.length - cutoff} More`}
        </Button>
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-gap: calc(var(--component-padding) / 2);
        }
      `}</style>
    </>
  );
};

export default ItemList;
