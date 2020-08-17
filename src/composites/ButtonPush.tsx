import { FC, useState } from "react";
import Button from "./Button";
import api from "services/api";
import { useApp } from "contexts/app";

const ButtonPush: FC = () => {
  const [state, dispatch] = useApp();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (state.selectedSource === "spotify") {
      setLoading(true);

      try {
        const {
          data: { pushResult },
        } = await api.patch(
          "/spotify/library",
          { library: state.library },
          {
            headers: {
              Authorization: localStorage.getItem("spotifyAccessToken"),
            },
          }
        );

        dispatch({ type: "setPushResult", pushResult });
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
      Push
    </Button>
  );
};

export default ButtonPush;
