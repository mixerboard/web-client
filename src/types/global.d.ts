type color = "primary" | "error" | "success" | "light" | "dark" | "grey";
type musicServiceId = "spotify" | "json";

interface Track {
  id: string;
  name: string;
  artist: string;
}

interface Album {
  id: string;
  name: string;
  artist: string;
}

interface Playlist {
  id: string;
  name: string;
  tracks: Track[];
}

interface Library {
  tracks: Track[];
  albums: Album[];
  playlists: Playlist[];
}
