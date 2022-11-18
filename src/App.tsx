import "bootstrap/dist/css/bootstrap.min.css";
import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import useLocalStorage from "./hooks/useLocalStorage";
import { NoteData, RawNote, Tag } from "./types";
import NoteList from "./components/NoteList";
import NoteLayout from "./components/NoteLayout";
import Note from "./components/Note";
import EditNote from "./components/EditNote";

const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(
    () =>
      notes.map((note) => ({
        ...note,
        tags: tags.filter((tag) => note.tagsIDs.includes(tag.id)),
      })),
    [notes, tags]
  );

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidv4(), tagsIDs: tags.map((tag) => tag.id) },
      ];
    });
  };

  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...data,
            tagsIDs: tags.map((tag) => tag.id),
          };
        } else {
          return note;
        }
      });
    });
  };

  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };

  const onAddTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  const onUpdateTag = (id: string, label: string) => {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  };

  const onDeleteTag = (id: string) => {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });
  };

  return (
    <Container className="my-4" style={{ minWidth: "320px" }}>
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              availableTags={tags}
              notes={notesWithTags}
              onUpdateTag={onUpdateTag}
              onDeleteTag={onDeleteTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={onAddTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onSubmit={onUpdateNote}
                onAddTag={onAddTag}
                availableTags={tags}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
