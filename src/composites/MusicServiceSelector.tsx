import { FC, Dispatch, SetStateAction } from "react";
import SpotifyButton from "./SpotifyButton";

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
        <SpotifyButton
          selected={selected === "spotify"}
          onClick={() => toggleSelected("spotify")}
        />
        <SpotifyButton
          selected={selected === "spotify"}
          onClick={() => toggleSelected("spotify")}
        />
        <SpotifyButton
          selected={selected === "spotify"}
          onClick={() => toggleSelected("spotify")}
        />
      </div>
      <style jsx>{`
        div {
          max-width: 500px;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default MusicServiceSelector;
