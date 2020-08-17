import { FC } from "react";

const MusicServiceButtonGrid: FC = ({ children }) => (
  <>
    <div>{children}</div>
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

export default MusicServiceButtonGrid;
