import { FC, ButtonHTMLAttributes, useState, useEffect } from "react";
import MusicServiceButton from "components/MusicServiceButton";
import { FaSpotify } from "react-icons/fa";
import api from "services/api";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const SpotifyButton: FC<Props> = ({ selected, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const spotifyAccessToken = localStorage.getItem("spotifyAccessToken");
    setIsAuthenticated(!!spotifyAccessToken);
  }, []);

  const authenticate = async () => {
    const {
      data: { requestAuthUrl },
    } = await api.get("/spotify/request-auth-url");

    requestAuthUrl && window.location.replace(requestAuthUrl);
  };

  return (
    <MusicServiceButton
      icon={<FaSpotify />}
      name="Spotify"
      authenticated={isAuthenticated}
      selected={selected}
      {...rest}
      onClick={async (e) => {
        rest.onClick(e);
        !isAuthenticated && authenticate();
      }}
    />
  );
};

export default SpotifyButton;
