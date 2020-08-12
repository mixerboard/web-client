import { FC, useState } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "composites/Button";
import MusicServiceButtonSelector from "composites/MusicServiceButtonSelector";

const HomePage: FC = () => {
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedTarget, setSelectedTarget] = useState("");

  return (
    <>
      <Card>
        <Heading>Source</Heading>
        <MusicServiceButtonSelector
          selected={selectedSource}
          setSelected={setSelectedSource}
        />
        <Button>Pull</Button>
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
