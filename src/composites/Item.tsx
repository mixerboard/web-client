import { FC } from "react";
import ItemComponent from "components/Item";
import Text from "components/Text";

interface Props {
  onDelete?: () => void;
}

const Item: FC<Props> = ({ onDelete, children }) => {
  return (
    <ItemComponent onDelete={onDelete}>
      <Text>{children}</Text>
    </ItemComponent>
  );
};

export default Item;
