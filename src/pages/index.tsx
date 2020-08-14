import { FC, useState, useEffect } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "composites/Button";
import MusicServiceButtonSelector from "composites/MusicServiceButtonSelector";
import ButtonPull from "composites/ButtonPull";
import Library from "composites/Library";

const HomePage: FC = () => {
  const [selectedSource, setSelectedSource] = useState<musicServiceId | null>();
  const [library, setLibrary] = useState<Library>();
  const [selectedTarget, setSelectedTarget] = useState<musicServiceId | null>();

  useEffect(() => console.log(library), [library]);
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
      {library && (
        <Card>
          <Heading>Library</Heading>
          <Library library={library} setLibrary={setLibrary} />
        </Card>
      )}
      {library && (
        <Card>
          <Heading>Target</Heading>
          <MusicServiceButtonSelector
            selected={selectedTarget}
            setSelected={setSelectedTarget}
          />
          <Button>Push</Button>
        </Card>
      )}
    </>
  );
};

export default HomePage;
