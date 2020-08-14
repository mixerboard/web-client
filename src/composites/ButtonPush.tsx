import { FC, useState, SetStateAction, Dispatch } from "react";
import Button from "./Button";

interface Props {
  musicServiceId: musicServiceId | null;
  library: Library;
  setUploadResult: Dispatch<SetStateAction<UploadResult>>;
}

const ButtonPush: FC<Props> = ({
  musicServiceId,
  library,
  setUploadResult,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (musicServiceId === "spotify") {
      return;
    } else if (musicServiceId === "json") {
      localStorage.setItem("jsonInput", JSON.stringify(library));

      // Because JSON is local, all items upload successfully
      setUploadResult({
        uploaded: library,
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
