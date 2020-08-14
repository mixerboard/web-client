import { FC, useState, useEffect } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import Button from "composites/Button";
import MusicServiceButtonSelector from "composites/MusicServiceButtonSelector";
import ButtonPull from "composites/ButtonPull";
import Library from "composites/Library";
import ButtonPush from "composites/ButtonPush";

const HomePage: FC = () => {
  const [selectedSource, setSelectedSource] = useState<musicServiceId | null>();
  const [library, setLibrary] = useState<Library>();
  const [selectedTarget, setSelectedTarget] = useState<musicServiceId | null>();
  const [uploadResult, setUploadResult] = useState<UploadResult>();

  useEffect(() => console.log(library), [library]);
  return (
    <>
      <Card>
        <Heading>Source</Heading>
        <MusicServiceButtonSelector
          selected={selectedSource}
          setSelected={setSelectedSource}
        />
        <ButtonPull musicServiceId={selectedSource} setLibrary={setLibrary} />
      </Card>
      {library && (
        <>
          <Card>
            <Heading>Library</Heading>
            <Library library={library} setLibrary={setLibrary} />
          </Card>

          <Card>
            <Heading>Target</Heading>
            <MusicServiceButtonSelector
              selected={selectedTarget}
              setSelected={setSelectedTarget}
            />
            <ButtonPush
              musicServiceId={selectedTarget}
              library={library}
              setUploadResult={setUploadResult}
            />
          </Card>
        </>
      )}
      {uploadResult && (
        <Card>
          <Heading variant="success">Uploaded Items</Heading>
          <Library library={uploadResult.uploaded} />
          <Heading variant="error">Failed Items</Heading>
          <Library library={uploadResult.failed} />
        </Card>
      )}
    </>
  );
};

export default HomePage;
