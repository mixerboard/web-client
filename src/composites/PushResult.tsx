import { FC } from "react";
import Heading from "components/Heading";
import ItemList from "./ItemList";
import Item from "./Item";
import ItemResultInner from "./ItemResultInner";

interface Props {
  result: PushResult;
}

const PushResult: FC<Props> = ({ result }) => {
  return (
    <>
      <Heading level={2}>Pushed</Heading>
      <Heading level={3}>Tracks</Heading>
      <ItemList
        cutoff={3}
        items={result.pushed.tracks.map(({ id, name }) => (
          <Item key={id}>
            <ItemResultInner result="pushed" text={name} />
          </Item>
        ))}
      />
      <Heading level={3}>Albums</Heading>
      <ItemList
        cutoff={3}
        items={result.pushed.albums.map(({ id, name }) => (
          <Item key={id}>
            <ItemResultInner result="pushed" text={name} />
          </Item>
        ))}
      />
      <Heading level={3}>Playlists</Heading>
      <ItemList
        cutoff={3}
        items={result.pushed.playlists.map(({ id, name }) => (
          <Item key={id}>
            <ItemResultInner result="pushed" text={name} />
          </Item>
        ))}
      />
      <Heading level={2}>Failed</Heading>
      <Heading level={3}>Tracks</Heading>
      <ItemList
        cutoff={3}
        items={result.failed.tracks.map(({ id, name }) => (
          <Item key={id}>
            <ItemResultInner result="failed" text={name} />
          </Item>
        ))}
      />
      <Heading level={3}>Albums</Heading>
      <ItemList
        cutoff={3}
        items={result.failed.albums.map(({ id, name }) => (
          <Item key={id}>
            <ItemResultInner result="failed" text={name} />
          </Item>
        ))}
      />
      <Heading level={3}>Playlists</Heading>
      <ItemList
        cutoff={3}
        items={result.failed.playlists.map(({ id, name }) => (
          <Item key={id}>
            <ItemResultInner result="failed" text={name} />
          </Item>
        ))}
      />
    </>
  );
};

export default PushResult;
