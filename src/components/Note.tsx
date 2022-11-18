import React from "react";
import { Row } from "react-bootstrap";
import { useNote } from "../hooks/useNote";

const Note = () => {
  const note = useNote();
  return (
    <>
      <Row className="align-items-center mb-4"></Row>
    </>
  );
};

export default Note;
