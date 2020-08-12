import { FC, useState } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "composites/AdvancedButton";
import MusicServiceSelector from "composites/MusicServiceSelector";

const HomePage: FC = () => {
  const [selectedSource, setSelectedSource] = useState("");

  return (
    <>
      <Card>
        <Heading>Source</Heading>
        <MusicServiceSelector
          selected={selectedSource}
          setSelected={setSelectedSource}
        />
        <Button>Test</Button>
      </Card>
    </>
  );
};

export default HomePage;
