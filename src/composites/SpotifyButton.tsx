import { FC, useState } from "react";
import MusicSourceButton from "components/MusicSourceButton";
import { FaSpotify } from "react-icons/fa";

const SpotifyButton: FC = () => {
  const [selected, setSelected] = useState(false);

  return (
    <MusicSourceButton
      icon={<FaSpotify />}
      name="Spotify"
      authenticated={true}
      selected={selected}
      onClick={() => {
        setSelected(!selected);
      }}
    />
  );
};

export default SpotifyButton;
