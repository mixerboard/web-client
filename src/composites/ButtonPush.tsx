import { FC, useState, SetStateAction, Dispatch } from "react";
import Button from "./Button";
import { useRouter } from "next/router";

interface Props {
  musicServiceId: musicServiceId | null;
  library: Library;
  setPushResult: Dispatch<SetStateAction<PushResult>>;
}

const ButtonPush: FC<Props> = ({ musicServiceId, library, setPushResult }) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (musicServiceId === "spotify") {
      return;
    } else if (musicServiceId === "json") {
      localStorage.setItem("jsonInput", JSON.stringify(library));
      push("/json-output");
    }
  };

  return (
    <Button loading={loading} disabled={!musicServiceId} onClick={handleClick}>
      Push
    </Button>
  );
};

export default ButtonPush;
