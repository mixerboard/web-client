import { FC, useState, SetStateAction, Dispatch } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import api from "services/api";

interface Props {
  musicServiceId: musicServiceId | null;
  library: Library;
  setPushResult: Dispatch<SetStateAction<PushResult>>;
}

const ButtonPush: FC<Props> = ({ musicServiceId, library, setPushResult }) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    if (musicServiceId === "spotify") {
      const {
        data: { pushResult },
      } = await api.patch(
        "/spotify/library",
        { library },
        {
          headers: {
            Authorization: localStorage.getItem("spotifyAccessToken"),
          },
        }
      );

      setPushResult(pushResult);
    } else if (musicServiceId === "json") {
      localStorage.setItem("jsonInput", JSON.stringify(library));
      push("/json-output");
    }

    setLoading(false);
  };

  return (
    <Button loading={loading} disabled={!musicServiceId} onClick={handleClick}>
      Push
    </Button>
  );
};

export default ButtonPush;
