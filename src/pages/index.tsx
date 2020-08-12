import { FC, useState } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "composites/Button";
import MusicServiceButtonSelector from "composites/MusicServiceButtonSelector";
import ButtonPull from "composites/ButtonPull";

const HomePage: FC = () => {
  const [selectedSource, setSelectedSource] = useState<musicServiceId | null>();
  const [library, setLibrary] = useState({});
  const [selectedTarget, setSelectedTarget] = useState<musicServiceId | null>();
  const [result, setResult] = useState({});

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
        <Heading>Target</Heading>
        <MusicServiceButtonSelector
          selected={selectedTarget}
          setSelected={setSelectedTarget}
        />
        <Button>Push</Button>
      </Card>
    </>
  );
};

export default HomePage;
