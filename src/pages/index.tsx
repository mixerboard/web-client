import { FC } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "composites/AdvancedButton";
import SpotifyButton from "composites/SpotifyButton";

const HomePage: FC = () => {
  return (
    <>
      <Card>
        <Heading>Source</Heading>
        <SpotifyButton />
        <br />
        <SpotifyButton />
        <br />
        <Button>Test</Button>
      </Card>
    </>
  );
};

export default HomePage;
