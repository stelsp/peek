export interface INote {
  id: string;
  label: string;
  body: string;
  status: boolean;
}

export interface IData {
  notes: INote[];
  addNote: (title: string, body: string) => void;
  deleteNote: (id: string) => void;
  changeNoteLabel: (label: string, id: string) => null | undefined;
  changeNoteBody: (body: string, id: string) => null | undefined;
  changeNoteStatus: (status: boolean, id: string) => null | undefined;
  clearAllNotes: () => void;
}

export interface IDataProvider {
  children: React.ReactNode;
}
