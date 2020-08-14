import { FC } from "react";
import Heading from "components/Heading";
import ItemList from "./ItemList";
import Item from "./Item";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

interface ItemResultInnerProps {
  result: "pushed" | "failed";
  text: string;
}

const ItemResultInner: FC<ItemResultInnerProps> = ({ result, text }) => (
  <>
    <span className="container">
      <span className={"icon " + result}>
        {result === "pushed" ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
      </span>
      {text}
    </span>
    <style jsx>{`
      .container {
        display: grid;
        grid-gap: calc(var(--component-padding) / 2);
        grid-auto-flow: column;
        grid-auto-column: min-content 1fr;
        justify-content: start;
      }

      .icon {
        display: grid;
        align-items: center;
      }

      .pushed {
        color: var(--color-success);
      }

      .failed {
        color: var(--color-error);
      }
    `}</style>
  </>
);

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
