import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Text from "components/Text";
import Alert from "components/Alert";

const CallbackPage: FC = () => {
  const [error, setError] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    setError(null);

    switch (query.musicServiceId) {
      case "spotify":
        console.log("id is spotify");
        break;
      default:
        setError("Invalid music service ID.");
    }
  }, [query]);

  return error ? (
    <Alert type="error">
      <Text type="error">Error: {error}</Text>
    </Alert>
  ) : (
    <Text>Authenticating, please wait...</Text>
  );
};

export default CallbackPage;
