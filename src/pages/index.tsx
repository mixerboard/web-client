import { FC } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "components/Button";
import Text from "components/Text";
import AdvancedButton from "composites/AdvancedButton";

const HomePage: FC = () => {
  return (
    <>
      <Card>
        <Heading>Source</Heading>
        <AdvancedButton loading>Test</AdvancedButton>
      </Card>
    </>
  );
};

export default HomePage;
