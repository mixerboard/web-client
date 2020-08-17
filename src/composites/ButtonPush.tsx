import { FC, useState } from "react";
import Button from "./Button";
import { useApp } from "contexts/app";
import useSpotify from "hooks/useSpotify";

const ButtonPush: FC = () => {
  const [state] = useApp();
  const [loading, setLoading] = useState(false);
  const spotify = useSpotify();

  const handleClick = async () => {
    setLoading(true);

    try {
      switch (state.selectedSource) {
        case "spotify": {
          await spotify.pushLibrary();
        }
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
      Push
    </Button>
  );
};

export default ButtonPush;
