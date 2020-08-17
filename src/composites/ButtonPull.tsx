import { FC, useState } from "react";
import Button from "composites/Button";
import { useApp } from "contexts/app";
import useSpotify from "hooks/useSpotify";

const ButtonPull: FC = () => {
  const [state] = useApp();
  const [loading, setLoading] = useState(false);
  const spotify = useSpotify();

  const handleClick = async () => {
    setLoading(true);

    try {
      switch (state.selectedSource) {
        case "spotify":
          await spotify.pullLibrary();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      loading={loading}
      disabled={!state.selectedSource}
      onClick={handleClick}
    >
      Pull
    </Button>
  );
};

export default ButtonPull;
