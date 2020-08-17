import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Text from "components/Text";
import Alert from "components/Alert";
import useSpotify from "hooks/useSpotify";

const CallbackPage: FC = () => {
  const [error, setError] = useState<Error>();
  const { query } = useRouter();
  const spotify = useSpotify();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        switch (query.musicServiceId) {
          case "spotify": {
            const code = query.code.toString();

            if (!code) {
              setError(new Error("No authentication code found"));
            }

            await spotify.authenticate(code);
            break;
          }
          default: {
            setError(new Error("Invalid music service ID"));
          }
        }
      } catch (e) {
        setError(e);
      }
    };

    setError(null);
    handleCallback();
  }, [query]);

  return error ? (
    <Alert variant="error">
      <Text variant="error">Error: {error.message}</Text>
    </Alert>
  ) : (
    <Text>Authenticating, please wait...</Text>
  );
};

export default CallbackPage;
