import useApi from "./useApi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useApp } from "contexts/app";

const useSpotify: () => {
  isAuthenticated: boolean;
  authenticate: (code?: string) => Promise<void>;
  pullLibrary: () => Promise<void>;
  pushLibrary: () => Promise<void>;
} = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [state, dispatch] = useApp();
  const router = useRouter();
  const api = useApi();

  useEffect(() => refreshIsAuthenticated(), []);

  const refreshIsAuthenticated = () => {
    const accessToken = localStorage.getItem("spotifyAccessToken");
    const expireTime = localStorage.getItem("spotifyExpireTime");
    const currentTime = new Date().getTime() / 1000;
    const tokenExpired = parseInt(expireTime) < currentTime;

    setIsAuthenticated(accessToken && !tokenExpired);
  };

  const requestAuthorization = async () => {
    const {
      data: { requestAuthUrl },
    } = await api.get("/spotify/request-auth-url");

    window.location.replace(requestAuthUrl);
  };

  const requestTokens = async (code: string) => {
    const {
      data: { accessToken, refreshToken, expiresIn },
    } = await api.post("/spotify/tokens", { code });

    localStorage.setItem("spotifyAccessToken", accessToken);
    localStorage.setItem("spotifyRefreshToken", refreshToken);
    localStorage.setItem(
      "spotifyExpireTime",
      new Date().getTime() / 1000 + expiresIn
    );

    router.push("/");
  };

  const authenticate = async (
    code: string = localStorage.getItem("spotifyRefreshToken")
  ) => {
    if (code) {
      await requestTokens(code);
    } else {
      await requestAuthorization();
    }

    refreshIsAuthenticated();
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
    authenticate,
    pullLibrary,
    pushLibrary,
  };
};

export default useSpotify;
