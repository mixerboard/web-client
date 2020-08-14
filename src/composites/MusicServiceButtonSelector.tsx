import { FC, Dispatch, SetStateAction } from "react";
import MusicServiceButtonSpotify from "./MusicServiceButtonSpotify";
import MusicServiceButtonJson from "./MusicServiceButtonJson";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const MusicServiceButtonSelector: FC<Props> = ({ selected, setSelected }) => {
  const toggleSelected = (newSelection: string) => {
    setSelected(selected === newSelection ? "" : newSelection);
  };

  return (
    <>
      <div>
        <MusicServiceButtonSpotify
          selected={selected === "spotify"}
          onClick={() => toggleSelected("spotify")}
        />
        <MusicServiceButtonJson
          selected={selected === "json"}
          onClick={() => toggleSelected("json")}
        />
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-gap: var(--component-padding);
          grid-template-columns: repeat(
            auto-fit,
            minmax(var(--music-service-button-size), 1fr)
          );
          justify-items: center;
        }
      `}</style>
    </>
  );
};

export default MusicServiceButtonSelector;
