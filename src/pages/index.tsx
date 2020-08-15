import { FC, useState } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import MusicServiceButtonSelector from "composites/MusicServiceButtonSelector";
import ButtonPull from "composites/ButtonPull";
import Library from "composites/Library";
import ButtonPush from "composites/ButtonPush";
import PushResult from "composites/PushResult";
import Button from "composites/Button";

const HomePage: FC = () => {
  const emptyLibrary: Library = { tracks: [], albums: [], playlists: [] };
  const emptyPushResult: PushResult = {
    pushed: emptyLibrary,
    failed: emptyLibrary,
  };
  const [selectedSource, setSelectedSource] = useState<musicServiceId | null>();
  const [library, setLibrary] = useState<Library>(emptyLibrary);
  const [selectedTarget, setSelectedTarget] = useState<musicServiceId | null>();
  const [pushResult, setPushResult] = useState<PushResult>(emptyPushResult);

  const reset = () => {
    localStorage.removeItem("jsonInput");
    setSelectedSource(null);
    setSelectedTarget(null);
    setPushResult(emptyPushResult);
    setLibrary(emptyLibrary);
  };

  return (
    <>
      <Card>
        <Heading>Source</Heading>
        <MusicServiceButtonSelector
          selected={selectedSource}
          setSelected={setSelectedSource}
        />
        <ButtonPull musicServiceId={selectedSource} setLibrary={setLibrary} />
      </Card>
      <Card>
        <Heading>Library</Heading>
        <Library library={library} setLibrary={setLibrary} />
      </Card>
      <Card>
        <Heading>Target</Heading>
        <MusicServiceButtonSelector
          selected={selectedTarget}
          setSelected={setSelectedTarget}
        />
        <ButtonPush
          musicServiceId={selectedTarget}
          library={library}
          setPushResult={setPushResult}
        />
      </Card>
      <Card>
        <Heading>Push Result</Heading>
        <PushResult result={pushResult} />
      </Card>
      <Button variant="error" onClick={reset}>
        Reset
      </Button>
    </>
  );
};

export default HomePage;
