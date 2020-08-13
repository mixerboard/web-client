import { FC, ButtonHTMLAttributes } from "react";
import ButtonComponent from "components/Button";
import Spinner from "components/Spinner";
import Text from "components/Text";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: color;
  loading?: boolean;
  link?: boolean;
}

const Button: FC<Props> = ({
  variant = "primary",
  loading = false,
  link = false,
  children,
  ...rest
}) => {
  const realVariant = loading || rest.disabled ? "grey" : variant;

  return (
    <ButtonComponent
      variant={realVariant}
      link={link}
      {...rest}
      disabled={loading || rest.disabled}
    >
      {loading && <Spinner variant={realVariant} />}
      <Text variant={realVariant}>{children}</Text>
    </ButtonComponent>
  );
};

export default Button;
