import { FC } from "react";
import Heading from "components/Heading";
import ItemList from "./ItemList";
import Item from "./Item";
import { useApp } from "contexts/app";

const PushResult: FC = () => {
  const [state] = useApp();

  const renderItems = (items: (Track | Album | Playlist)[]) => {
    return items.map((item) => <Item key={item.id}>{item.name}</Item>);
  };

  return (
    <>
      <Heading level={2}>Pushed</Heading>
      <Heading level={3}>Tracks</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.pushResult.pushed.tracks)}
      />
      <Heading level={3}>Albums</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.pushResult.pushed.albums)}
      />
      <Heading level={3}>Playlists</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.pushResult.pushed.playlists)}
      />
      <Heading level={2}>Failed</Heading>
      <Heading level={3}>Tracks</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.pushResult.failed.tracks)}
      />
      <Heading level={3}>Albums</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.pushResult.failed.albums)}
      />
      <Heading level={3}>Playlists</Heading>
      <ItemList
        cutoff={3}
        items={renderItems(state.pushResult.failed.playlists)}
      />
    </>
  );
};

export default PushResult;
