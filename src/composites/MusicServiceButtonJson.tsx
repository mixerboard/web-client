import { FC, ButtonHTMLAttributes, useEffect, useState } from "react";
import MusicServiceButton from "components/MusicServiceButton";
import { FaCode } from "react-icons/fa";
import { useRouter } from "next/router";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const MusicServiceButtonJson: FC<Props> = ({ selected, ...rest }) => {
  const { push } = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(checkIsAuthenticated());
  }, []);

  const checkIsAuthenticated = () => {
    const jsonInput = localStorage.getItem("jsonInput");

    return Boolean(jsonInput);
  };

  const authenticate = () => {
    if (!checkIsAuthenticated()) {
      push("/json-input");
    }
  };

  return (
    <MusicServiceButton
      name="JSON"
      selected={selected}
      authenticated={isAuthenticated}
      icon={<FaCode />}
      {...rest}
      onClick={(e) => {
        authenticate();
        rest.onClick(e);
      }}
    />
  );
};

export default MusicServiceButtonJson;
