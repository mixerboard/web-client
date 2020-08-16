import { FC, useState, useEffect } from "react";
import { useApp } from "contexts/app";
import Alert from "./Alert";
import Button from "./Button";

const LibraryViewText: FC = () => {
  const [state, dispatch] = useApp();
  const [editingLibrary, setEditingLibrary] = useState<string>();
  const [editingLibraryError, setEditingLibraryError] = useState<Error>();

  useEffect(() => {
    setEditingLibrary(JSON.stringify(state.library));
    setEditingLibraryError(null);
  }, [state.library]);

  const saveLibrary = () => {
    try {
      const library = JSON.parse(editingLibrary);
      dispatch({ type: "setLibrary", library });
    } catch (e) {
      setEditingLibraryError(e);
    }
  };

  return (
    <>
      <textarea
        rows={40}
        value={editingLibrary}
        style={{ resize: "vertical" }}
        onChange={({ target: { value } }) => setEditingLibrary(value)}
      />
      {editingLibraryError && (
        <Alert variant="error">{editingLibraryError.message}</Alert>
      )}
      <Button onClick={saveLibrary}>Save</Button>
    </>
  );
};

export default LibraryViewText;
