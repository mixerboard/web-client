import { FC } from "react";
import AlertComponent from "components/Alert";
import Text from "components/Text";

interface Props {
  variant?: color;
}

const Alert: FC<Props> = ({ variant = "primary", children }) => (
  <AlertComponent variant={variant}>
    <Text variant={variant}>{children}</Text>
  </AlertComponent>
);

export default Alert;
