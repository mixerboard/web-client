import { FC, ButtonHTMLAttributes } from "react";
import Button from "components/Button";
import Spinner from "components/Spinner";
import Text from "components/Text";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: colors;
  loading?: boolean;
}

const AdvancedButton: FC<Props> = ({
  variant = "primary",
  loading = false,
  children,
  ...rest
}) => {
  const realVariant = loading ? "grey" : variant;

  return (
    <Button variant={realVariant} disabled={loading} {...rest}>
      {loading && <Spinner variant={realVariant} />}
      <Text variant={realVariant}>{children}</Text>
    </Button>
  );
};

export default AdvancedButton;
