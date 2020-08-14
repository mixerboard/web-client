import { FC, useState, SetStateAction, Dispatch } from "react";
import Button from "./Button";

interface Props {
  musicServiceId: musicServiceId | null;
  library: Library;
  setPushResult: Dispatch<SetStateAction<PushResult>>;
}

const ButtonPush: FC<Props> = ({ musicServiceId, library, setPushResult }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (musicServiceId === "spotify") {
      return;
    } else if (musicServiceId === "json") {
      localStorage.setItem("jsonInput", JSON.stringify(library));

      // Because JSON is local, all items upload successfully
      setPushResult({
        pushed: library,
        failed: { albums: [], tracks: [], playlists: [] },
      });
    }
  };

  return (
    <Button loading={loading} disabled={!musicServiceId} onClick={handleClick}>
      Push
    </Button>
  );
};

export default ButtonPush;
