import { FC, ButtonHTMLAttributes } from "react";
import MusicServiceButton from "components/MusicServiceButton";
import { FaCode } from "react-icons/fa";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const MusicServiceButtonJson: FC<Props> = ({ selected, ...rest }) => {
  return (
    <MusicServiceButton
      name="JSON"
      selected={selected}
      icon={<FaCode />}
      {...rest}
    />
  );
};

export default MusicServiceButtonJson;
