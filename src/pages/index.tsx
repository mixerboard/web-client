import { NextPage } from "next";
import Card from "components/Card";
import Heading from "components/Heading";
import MusicServiceButtonSelector from "composites/MusicServiceButtonSelector";
import ButtonPull from "composites/ButtonPull";
import Library from "composites/Library";
import ButtonPush from "composites/ButtonPush";
import PushResult from "composites/PushResult";

const HomePage: NextPage = () => (
  <>
    <Card>
      <Heading>Source</Heading>
      <MusicServiceButtonSelector />
      <ButtonPull />
    </Card>
    <Card>
      <Heading>Library</Heading>
      <Library />
    </Card>
    <Card>
      <Heading>Target</Heading>
      <MusicServiceButtonSelector />
      <ButtonPush />
    </Card>
    <Card>
      <Heading>Push Result</Heading>
      <PushResult />
    </Card>
  </>
);

export default HomePage;
