import MusicService from "./MusicService";

class Spotify extends MusicService {
  authenticate(): void {
    const spotifyStatus = JSON.parse(localStorage.getItem("spotify"));

    if (spotifyStatus?.isAuthenticated) {
      return;
    } else if (spotifyStatus?.code) {
      // TODO: get token
    } else {
      api.get("/api");
      // TODO: get code
    }
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
