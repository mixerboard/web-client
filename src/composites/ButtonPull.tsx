import { FC, Dispatch, SetStateAction } from "react";
import Button from "composites/Button";
import api from "services/api";

interface Props {
  musicServiceId: musicServiceId | null;
  setLibrary: Dispatch<SetStateAction<Record<string, unknown>>>;
}

const ButtonPull: FC<Props> = ({ musicServiceId, setLibrary }) => {
  const handleClick = async () => {
    if (musicServiceId === "spotify") {
      const {
        data: { library },
      } = await api.get("/spotify/library", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("spotifyAccessToken")}`,
        },
      });

      console.log(library);
      setLibrary(library);
    }
  };

  return (
    <Button disabled={!musicServiceId} onClick={handleClick}>
      Pull
    </Button>
  );
};

export default ButtonPull;
