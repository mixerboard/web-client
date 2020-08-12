import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Text from "components/Text";
import Alert from "components/Alert";
import Spotify from "services/Spotify";

const CallbackPage: FC = () => {
  const [error, setError] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    const musicServiceId = query.musicServiceId;
    setError(null);

    if (musicServiceId === "spotify") {
      const authenticateSpotify = async () => {
        const code = query.code;
        const spotifyInstance = new Spotify();

        if (!code) {
          setError("No code found");
          return;
        }

        localStorage.setItem("spotifyCode", code.toString());

        try {
          await spotifyInstance.authenticate();
        } catch (e) {
          setError("Something broke");
        }
      };

      authenticateSpotify();
    }
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
