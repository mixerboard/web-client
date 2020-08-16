import { FC, useState } from "react";
import LibraryViewText from "./LibraryViewText";
import LibraryViewGraphical from "./LibraryViewGraphical";
import Button from "./Button";

const Library: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>();

  return (
    <>
      <Button onClick={() => setIsEditing(!isEditing)}>Change View</Button>
      {isEditing ? <LibraryViewText /> : <LibraryViewGraphical />}
    </>
  );
};

export default Library;
