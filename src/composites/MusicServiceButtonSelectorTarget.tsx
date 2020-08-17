import { FC } from "react";
import MusicServiceButtonSpotify from "./MusicServiceButtonSpotify";
import MusicServiceButtonGrid from "./MusicServiceButtonGrid";
import { useApp } from "contexts/app";

const MusicServiceButtonSelectorTarget: FC = () => {
  const [state, dispatch] = useApp();

  const toggleSelectedTarget = (newSelectedTarget: musicServiceId) => {
    if (state.selectedTarget === newSelectedTarget) {
      dispatch({ type: "setSelectedTarget", selectedTarget: null });
    } else {
      dispatch({
        type: "setSelectedTarget",
        selectedTarget: newSelectedTarget,
      });
    }
  };

  return (
    <MusicServiceButtonGrid>
      <MusicServiceButtonSpotify
        selected={state.selectedTarget === "spotify"}
        onClick={() => toggleSelectedTarget("spotify")}
      />
    </MusicServiceButtonGrid>
  );
};

export default MusicServiceButtonSelectorTarget;
