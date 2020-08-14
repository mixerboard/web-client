import { NextPage } from "next";
import { useState } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "composites/Button";
import { useRouter } from "next/router";
import Alert from "composites/Alert";

const JsonInputPage: NextPage = () => {
  const { push } = useRouter();
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    try {
      JSON.parse(jsonInput);

      localStorage.setItem("jsonInput", jsonInput);
      push("/");
    } catch (e) {
      setError(e.toString());
    }
  };

  return (
    <Card>
      <Heading>JSON Input</Heading>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        style={{ resize: "vertical", minHeight: "300px" }}
      />
      {error && <Alert variant="error">{error}</Alert>}
      <Button onClick={handleClick}>Save</Button>
    </Card>
  );
};

export default JsonInputPage;
