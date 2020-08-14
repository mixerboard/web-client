import { FC, ButtonHTMLAttributes, useState, useEffect } from "react";
import MusicServiceButton from "components/MusicServiceButton";
import { FaSpotify } from "react-icons/fa";
import api from "services/api";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const MusicServiceButtonSpotify: FC<Props> = ({ selected, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(checkIsAuthenticated());
  }, []);

  const checkIsAuthenticated = () => {
    const spotifyAccessToken = localStorage.getItem("spotifyAccessToken");
    const spotifyAccessTokenExpireTime = parseInt(
      localStorage.getItem("spotifyAccessTokenExpireTime")
    );
    const currentTime = new Date().getTime() / 1000;
    const tokenExpired = spotifyAccessTokenExpireTime < currentTime;
    const isAuthenticated = spotifyAccessToken && !tokenExpired;

    return isAuthenticated;
  };

  const authenticate = async () => {
    if (!checkIsAuthenticated()) {
      try {
        const {
          data: { requestAuthUrl },
        } = await api.get("/spotify/request-auth-url");

        window.location.replace(requestAuthUrl);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <MusicServiceButton
      icon={<FaSpotify />}
      name="Spotify"
      authenticated={isAuthenticated}
      selected={selected}
      {...rest}
      onClick={async (e) => {
        await authenticate();
        rest.onClick(e);
      }}
    />
  );
};

export default MusicServiceButtonSpotify;
