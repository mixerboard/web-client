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
  const [selectedSource, setSelectedSource] = useState<musicServiceId | null>();
  const [library, setLibrary] = useState<Library>();
  const [selectedTarget, setSelectedTarget] = useState<musicServiceId | null>();
  const [pushResult, setPushResult] = useState<PushResult>();

  const reset = () => {
    localStorage.removeItem("jsonInput");

    setSelectedSource(null);
    setLibrary(null);
    setSelectedTarget(null);
    setPushResult(null);
  };

  return (
    <>
      {!library && (
        <Card>
          <Heading>Source</Heading>
          <MusicServiceButtonSelector
            selected={selectedSource}
            setSelected={setSelectedSource}
          />
          <ButtonPull musicServiceId={selectedSource} setLibrary={setLibrary} />
        </Card>
      )}
      {library && !pushResult && (
        <>
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
        </>
      )}
      {pushResult && (
        <Card>
          <Heading>Push Result</Heading>
          <PushResult result={pushResult} />
        </Card>
      )}
      <Card>
        <Button variant="error" onClick={reset}>
          Reset
        </Button>
      </Card>
    </>
  );
};

export default HomePage;
