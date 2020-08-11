import { FC, ButtonHTMLAttributes } from "react";
import Button from "components/Button";
import Spinner from "components/Spinner";
import Text from "components/Text";

interface Props {
  type?: colors;
  loading?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const AdvancedButton: FC<Props> = ({
  type = "primary",
  loading = false,
  buttonProps = {},
  children,
}) => {
  const realType = loading ? "grey" : type;

  return (
    <Button type={realType} buttonProps={{ disabled: loading, ...buttonProps }}>
      {loading && <Spinner type={realType} />}
      <Text type={realType}>{children}</Text>
    </Button>
  );
};

export default AdvancedButton;
