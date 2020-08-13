import { FC, Dispatch, SetStateAction, useState } from "react";
import Button from "composites/Button";
import api from "services/api";

interface Props {
  musicServiceId: musicServiceId | null;
  setLibrary: Dispatch<SetStateAction<Record<string, unknown>>>;
}

const ButtonPull: FC<Props> = ({ musicServiceId, setLibrary }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (musicServiceId === "spotify") {
      setLoading(true);

      const {
        data: { library },
      } = await api.get("/spotify/library", {
        headers: {
          Authorization: localStorage.getItem("spotifyAccessToken"),
        },
      });

      console.log(library);
      setLibrary(library);
      setLoading(false);
    }
  };

  return (
    <Button loading={loading} disabled={!musicServiceId} onClick={handleClick}>
      Pull
    </Button>
  );
};

export default ButtonPull;
