import useApi from "./useApi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useApp } from "contexts/app";

const useSpotify: () => {
  isAuthenticated: boolean;
  requestAuthorization: () => Promise<void>;
  requestTokens: (code: string) => Promise<void>;
  pullLibrary: () => Promise<void>;
  pushLibrary: () => Promise<void>;
} = () => {
  const [state, dispatch] = useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const api = useApi();
  const { push } = useRouter();

  useEffect(() => setIsAuthenticated(checkIsAuthenticated()), []);

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

  const requestAuthorization = async () => {
    const {
      data: { requestAuthUrl },
    } = await api.get("/spotify/request-auth-url");

    window.location.replace(requestAuthUrl);
  };

  const requestTokens = async (code: string) => {
    const {
      data: { accessToken, expiresIn },
    } = await api.post("/spotify/tokens", { code });

    localStorage.setItem("spotifyAccessToken", accessToken);
    localStorage.setItem(
      "spotifyAccessTokenExpireTime",
      new Date().getTime() / 1000 + expiresIn
    );

    push("/");
  };

  const pullLibrary = async () => {
    const {
      data: { library },
    } = await api.get("/spotify/library", {
      headers: {
        Authorization: localStorage.getItem("spotifyAccessToken"),
      },
    });

    dispatch({ type: "setLibrary", library });
  };

  const pushLibrary = async () => {
    const {
      data: { pushResult },
    } = await api.patch(
      "/spotify/library",
      { library: state.library },
      {
        headers: {
          Authorization: localStorage.getItem("spotifyAccessToken"),
        },
      }
    );

    dispatch({ type: "setPushResult", pushResult });
  };

  return {
    isAuthenticated,
    requestAuthorization,
    requestTokens,
    pullLibrary,
    pushLibrary,
  };
};

export default useSpotify;
