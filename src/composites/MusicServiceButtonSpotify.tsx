import { FC, ButtonHTMLAttributes } from "react";
import MusicServiceButton from "components/MusicServiceButton";
import { FaSpotify } from "react-icons/fa";
import useSpotify from "hooks/useSpotify";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const MusicServiceButtonSpotify: FC<Props> = ({ selected, ...rest }) => {
  const spotify = useSpotify();

  return (
    <MusicServiceButton
      icon={<FaSpotify />}
      name="Spotify"
      authenticated={spotify.isAuthenticated}
      selected={selected}
      {...rest}
      onClick={async (e) => {
        !spotify.isAuthenticated && (await spotify.authenticate());
        rest.onClick(e);
      }}
    />
  );
};

export default MusicServiceButtonSpotify;
