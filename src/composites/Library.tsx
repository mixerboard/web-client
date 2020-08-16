import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import Heading from "components/Heading";
import ItemList from "./ItemList";
import Item from "composites/Item";
import Button from "./Button";
import Alert from "./Alert";

interface Props {
  library: Library;
  setLibrary: Dispatch<SetStateAction<Library>>;
}

const Library: FC<Props> = ({ library, setLibrary }) => {
  const [isEditing, setIsEditing] = useState<boolean>();
  const [editingLibrary, setEditingLibrary] = useState<string>();
  const [editingLibraryError, setEditingLibraryError] = useState<string>();

  useEffect(() => {
    setEditingLibrary(JSON.stringify(library));
    setEditingLibraryError("");
  }, [library]);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  const saveLibrary = () => {
    try {
      setLibrary(JSON.parse(editingLibrary));
      setIsEditing(false);
    } catch (e) {
      setEditingLibraryError(e.message);
    }
  };

  const deleteItem = (itemId: string, itemType: string) => {
    setLibrary({
      ...library,
      [itemType]: library[itemType].filter(({ id }) => id !== itemId),
    });
  };

  const tracks = library.tracks.map((track) => (
    <Item key={track.id} onDelete={() => deleteItem(track.id, "tracks")}>
      {track.name}
    </Item>
  ));

  const albums = library.albums.map((album) => (
    <Item key={album.id} onDelete={() => deleteItem(album.id, "albums")}>
      {album.name}
    </Item>
  ));

  const playlists = library.playlists.map((playlist) => (
    <Item
      key={playlist.id}
      onDelete={() => deleteItem(playlist.id, "playlists")}
    >
      {playlist.name}
    </Item>
  ));

  return (
    <>
      {isEditing ? (
        <>
          <textarea
            rows={30}
            value={editingLibrary}
            style={{ resize: "vertical" }}
            onChange={({ target: { value } }) => setEditingLibrary(value)}
          />
          {editingLibraryError && (
            <Alert variant="error">{editingLibraryError}</Alert>
          )}
          <Button onClick={saveLibrary}>Save</Button>
        </>
      ) : (
        <>
          <Heading level={2}>Tracks</Heading>
          <ItemList cutoff={3} items={tracks} />
          <Heading level={2}>Albums</Heading>
          <ItemList cutoff={3} items={albums} />
          <Heading level={2}>Playlists</Heading>
          <ItemList cutoff={3} items={playlists} />
          <Button onClick={toggleIsEditing}>Edit</Button>
        </>
      )}
    </>
  );
};

export default Library;
