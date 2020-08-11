import { FC } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "components/Button";
import Text from "components/Text";

const HomePage: FC = () => {
  return (
    <>
      <Card>
        <Heading>Source</Heading>
        <Button disabled loading>
          Pull
        </Button>
      </Card>
    </>
  );
};

export default HomePage;
