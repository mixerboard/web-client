import { FC, useState } from "react";
import LibraryViewText from "./LibraryViewText";
import LibraryViewGraphical from "./LibraryViewGraphical";
import Button from "./Button";
import Heading from "components/Heading";

const Library: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>();

  return (
    <>
      <div>
        <Heading>Library</Heading>
        <Button link onClick={() => setIsEditing(!isEditing)}>
          Change View
        </Button>
      </div>
      {isEditing ? <LibraryViewText /> : <LibraryViewGraphical />}
      <style jsx>{`
        div {
          display: grid;
          grid-auto-flow: column;
        }
      `}</style>
    </>
  );
};

export default Library;
