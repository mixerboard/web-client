import { NextPage } from "next";
import Card from "components/Card";
import Text from "components/Text";
import Heading from "components/Heading";
import { useState, useEffect } from "react";

const JsonOutputPage: NextPage = () => {
  const [jsonString, setJsonString] = useState("");

  useEffect(() => setJsonString(localStorage.getItem("jsonInput")), []);

  return (
    <Card>
      <Heading>JSON Output</Heading>
      <Text>
        <pre>{JSON.stringify(JSON.parse(jsonString || "{}"), null, 2)}</pre>
      </Text>
    </Card>
  );
};

export default JsonOutputPage;
