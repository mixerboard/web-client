import { FC, ButtonHTMLAttributes } from "react";
import MusicServiceButton from "components/MusicServiceButton";
import { FaSpotify } from "react-icons/fa";
import Spotify from "services/Spotify";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  onSelect: () => void;
}
const SpotifyButton: FC<Props> = ({ selected, onSelect, ...rest }) => {
  const spotifyInstance = new Spotify();

  return (
    <MusicServiceButton
      icon={<FaSpotify />}
      name="Spotify"
      authenticated={true}
      selected={selected}
      onClick={() => {
        onSelect();
        spotifyInstance.authenticate();
      }}
      {...rest}
    />
  );
};

export default SpotifyButton;
