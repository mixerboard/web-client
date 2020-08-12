import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Text from "components/Text";
import Alert from "components/Alert";
import api from "services/api";

const CallbackPage: FC = () => {
  const [error, setError] = useState(null);
  const { query, push } = useRouter();

  useEffect(() => {
    (async () => {
      setError(null);
      const musicServiceId = query.musicServiceId;

      if (musicServiceId === "spotify") {
        const code = query.code;

        !code && setError("No authentication code found");

        try {
          const {
            data: { accessToken, refreshToken, expiresIn },
          } = await api.post("/spotify/tokens", { code });

          localStorage.setItem("spotifyAccessToken", accessToken);
          localStorage.setItem("spotifyRefreshToken", refreshToken);
          localStorage.setItem("spotifyExpiresIn", expiresIn);

          push("/");
        } catch (e) {
          setError("Something broke");
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
