import { FC } from "react";
import MusicServiceButtonSpotify from "./MusicServiceButtonSpotify";

const MusicServiceButtonSelector: FC = () => (
  <>
    <div>
      <MusicServiceButtonSpotify />
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

export default MusicServiceButtonSelector;
