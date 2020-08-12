import { FC, Dispatch, SetStateAction } from "react";
import MusicServiceButtonSpotify from "./MusicServiceButtonSpotify";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const MusicServiceSelector: FC<Props> = ({ selected, setSelected }) => {
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

export default MusicServiceSelector;
