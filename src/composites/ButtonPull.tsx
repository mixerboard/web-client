import { FC, Dispatch, SetStateAction, useState } from "react";
import Button from "composites/Button";
import api from "services/api";
import { useRouter } from "next/router";

interface Props {
  musicServiceId: musicServiceId | null;
  setLibrary: Dispatch<SetStateAction<Library>>;
}

const ButtonPull: FC<Props> = ({ musicServiceId, setLibrary }) => {
  const { push } = useRouter();
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

      setLibrary(library);
      setLoading(false);
    } else if (musicServiceId === "json") {
      const parsedJsonInput = JSON.parse(localStorage.getItem("jsonInput"));

      if (parsedJsonInput) {
        setLibrary(parsedJsonInput);
      } else {
        push("/json-input");
      }
    }
  };

  return (
    <Button loading={loading} disabled={!musicServiceId} onClick={handleClick}>
      Pull
    </Button>
  );
};

export default ButtonPull;
