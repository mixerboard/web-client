import { FC } from "react";
import { useApp } from "contexts/app";
import Item from "./Item";
import Heading from "components/Heading";
import ItemList from "./ItemList";

const LibraryViewGraphical: FC = () => {
  const [state, dispatch] = useApp();

  const deleteItem = (itemId: string, itemType: string) => {
    const library = {
      ...state.library,
      [itemType]: state.library[itemType].filter(({ id }) => id !== itemId),
    };
    dispatch({ type: "setLibrary", library });
  };

  const renderItems = (
    items: (Track | Album | Playlist)[],
    itemsType: string
  ) => {
    return items.map((item) => (
      <Item key={item.id} onDelete={() => deleteItem(item.id, itemsType)}>
        {item.name}
      </Item>
    ));
  };
  return (
    <>
      <Heading level={2}>Tracks</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.library.tracks, "tracks")}
      />
      <Heading level={2}>Albums</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.library.albums, "albums")}
      />
      <Heading level={2}>Playlists</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.library.playlists, "playlists")}
      />
    </>
  );
};

export default LibraryViewGraphical;
