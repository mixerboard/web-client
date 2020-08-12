import MusicService from "./MusicService";
import api from "./api";

class Spotify extends MusicService {
  async authenticate(): Promise<void> {
    const isAuthenticated = localStorage.getItem("spotifyIsAuthenticated");

    if (isAuthenticated === "true") {
      return;
    }

    const code = localStorage.getItem("spotifyCode");

    if (code) {
      const {
        data: { accessToken, refreshToken, expiresIn },
      } = await api.post("/spotify/tokens", { code });

      localStorage.setItem("spotifyAccessToken", accessToken);
      localStorage.setItem("spotifyRefreshToken", refreshToken);
      localStorage.setItem("spotifyExpiresIn", expiresIn);
      localStorage.setItem("spotifyIsAuthenticated", "true");

      return;
    }

    const {
      data: { requestAuthUrl },
    } = await api.get("/spotify/request-auth-url");

    window.location = requestAuthUrl;
  }

  deauthenticate() {
    localStorage.removeItem("spotify");
  }

  pullLibrary() {
    // TODO: call server to pull library
    return {};
  }

  pushLibrary() {
    // TODO: call server to push library
    return {};
  }
}

export default Spotify;
