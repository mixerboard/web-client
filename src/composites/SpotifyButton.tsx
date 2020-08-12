import { FC, ButtonHTMLAttributes, useState, useEffect } from "react";
import MusicServiceButton from "components/MusicServiceButton";
import { FaSpotify } from "react-icons/fa";
import api from "services/api";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  onSelect: () => void;
}
const SpotifyButton: FC<Props> = ({ selected, onSelect, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(
      localStorage.getItem("spotifyIsAuthenticated") === "true"
    );
  }, []);

  const authenticate = async () => {
    if (isAuthenticated) {
      return;
    } else {
      const {
        data: { requestAuthUrl },
      } = await api.get("/spotify/request-auth-url");

      window.location = requestAuthUrl;
    }
  };

  return (
    <MusicServiceButton
      icon={<FaSpotify />}
      name="Spotify"
      authenticated={isAuthenticated}
      selected={selected}
      onClick={() => {
        onSelect();
        authenticate();
      }}
      {...rest}
    />
  );
};

export default SpotifyButton;
