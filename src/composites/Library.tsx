import { FC, Dispatch, SetStateAction } from "react";
import Heading from "components/Heading";
import ItemList from "./ItemList";
import Item from "composites/Item";

interface Props {
  library: Library;
  setLibrary: Dispatch<SetStateAction<Library>>;
}

const Library: FC<Props> = ({ library, setLibrary }) => {
  return (
    <>
      <Heading level={2}>Tracks</Heading>
      <ItemList
        cutoff={3}
        items={library.tracks.map((track) => (
          <Item
            key={track.id}
            onDelete={() => {
              setLibrary({
                ...library,
                tracks: library.tracks.filter(({ id }) => id !== track.id),
              });
            }}
          >
            {track.name}
          </Item>
        ))}
      />
      <Heading level={2}>Albums</Heading>
      <ItemList
        cutoff={3}
        items={library.albums.map((album) => (
          <Item
            key={album.id}
            onDelete={() => {
              setLibrary({
                ...library,
                albums: library.albums.filter(({ id }) => id !== album.id),
              });
            }}
          >
            {album.name}
          </Item>
        ))}
      />
      <Heading level={2}>Playlists</Heading>
      <ItemList
        cutoff={3}
        items={library.playlists.map((playlist) => (
          <Item
            key={playlist.id}
            onDelete={() => {
              setLibrary({
                ...library,
                playlists: library.playlists.filter(
                  ({ id }) => id !== playlist.id
                ),
              });
            }}
          >
            {playlist.name}
          </Item>
        ))}
      />
    </>
  );
};

export default Library;
