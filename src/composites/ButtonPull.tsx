import { FC, useState } from "react";
import Button from "composites/Button";
import api from "services/api";
import { useApp } from "contexts/app";

const ButtonPull: FC = () => {
  const [state, dispatch] = useApp();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (state.selectedSource === "spotify") {
      setLoading(true);

      try {
        const {
          data: { library },
        } = await api.get("/spotify/library", {
          headers: {
            Authorization: localStorage.getItem("spotifyAccessToken"),
          },
        });

        dispatch({ type: "setLibrary", library });
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
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
