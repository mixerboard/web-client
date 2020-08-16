import { FC, ButtonHTMLAttributes, useState, useEffect } from "react";
import MusicServiceButton from "components/MusicServiceButton";
import { FaSpotify } from "react-icons/fa";
import api from "services/api";
import { useApp } from "contexts/app";

const MusicServiceButtonSpotify: FC<ButtonHTMLAttributes<
  HTMLButtonElement
>> = ({ ...rest }) => {
  const [state, dispatch] = useApp();
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
      selected={state.selectedSource === "spotify"}
      {...rest}
      onClick={async () => {
        await authenticate();
        dispatch({ type: "setSelectedSource", selectedSource: "spotify" });
      }}
    />
  );
};

export default MusicServiceButtonSpotify;
