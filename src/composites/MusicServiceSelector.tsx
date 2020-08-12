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
      <div className="container">
        <SpotifyButton
          selected={selected === "spotify"}
          onClick={() => toggleSelected("spotify")}
        />
      </div>
    </>
  );
};

export default MusicServiceSelector;
