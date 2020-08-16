import { FC, useState, SetStateAction, Dispatch } from "react";
import Button from "./Button";
import api from "services/api";
import { useApp } from "contexts/app";

const ButtonPush: FC = () => {
  const [state, dispatch] = useApp();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    if (state.selectedSource === "spotify") {
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
    }

    setLoading(false);
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
