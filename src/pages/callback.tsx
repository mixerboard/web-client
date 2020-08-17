import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Text from "components/Text";
import Alert from "components/Alert";
import useSpotify from "hooks/useSpotify";

const CallbackPage: FC = () => {
  const [error, setError] = useState(null);
  const { query } = useRouter();
  const spotify = useSpotify();

  useEffect(() => {
    (async () => {
      setError(null);
      const musicServiceId = query.musicServiceId;

      if (musicServiceId === "spotify") {
        const code = query.code.toString();
        !code && setError("No authentication code found");

        try {
          await spotify.requestTokens(code);
        } catch (e) {
          setError(e.message);
        }
      } else {
        setError("Invalid music service ID");
      }
    })();
  }, [query]);

  return error ? (
    <Alert variant="error">
      <Text variant="error">Error: {error}</Text>
    </Alert>
  ) : (
    <Text>Authenticating, please wait...</Text>
  );
};

export default CallbackPage;
