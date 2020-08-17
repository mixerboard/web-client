import { FC } from "react";
import MusicServiceButtonSpotify from "./MusicServiceButtonSpotify";
import MusicServiceButtonGrid from "./MusicServiceButtonGrid";
import { useApp } from "contexts/app";

const MusicServiceButtonSelectorSource: FC = () => {
  const [state, dispatch] = useApp();

  const toggleSelectedSource = (newSelectedSource: musicServiceId) => {
    if (state.selectedSource === newSelectedSource) {
      dispatch({ type: "setSelectedSource", selectedSource: null });
    } else {
      dispatch({
        type: "setSelectedSource",
        selectedSource: newSelectedSource,
      });
    }
  };

  return (
    <MusicServiceButtonGrid>
      <MusicServiceButtonSpotify
        selected={state.selectedSource === "spotify"}
        onClick={() => toggleSelectedSource("spotify")}
      />
    </MusicServiceButtonGrid>
  );
};

export default MusicServiceButtonSelectorSource;
