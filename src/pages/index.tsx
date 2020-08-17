import { NextPage } from "next";
import Card from "components/Card";
import Heading from "components/Heading";
import ButtonPull from "composites/ButtonPull";
import Library from "composites/Library";
import ButtonPush from "composites/ButtonPush";
import PushResult from "composites/PushResult";
import MusicServiceButtonSelectorSource from "composites/MusicServiceButtonSelectorSource";
import MusicServiceButtonSelectorTarget from "composites/MusicServiceButtonSelectorTarget";

const HomePage: NextPage = () => (
  <>
    <Card>
      <Heading>Source</Heading>
      <MusicServiceButtonSelectorSource />
      <ButtonPull />
    </Card>
    <Card>
      <Heading>Library</Heading>
      <Library />
    </Card>
    <Card>
      <Heading>Target</Heading>
      <MusicServiceButtonSelectorTarget />
      <ButtonPush />
    </Card>
    <Card>
      <Heading>Push Result</Heading>
      <PushResult />
    </Card>
  </>
);

export default HomePage;
