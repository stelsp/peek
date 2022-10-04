import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useData } from "../../context/context";

const SearchBar = () => {
  const { notes } = useData()!;

  return (
    <Autocomplete
      disablePortal
      id="search-bar"
      options={notes}
      sx={{ pl: 10, pr: 2, width: 700 }}
      renderInput={(params) => (
        <TextField {...params} label="Поиск" variant="filled" />
      )}
    />
  );
};

export default SearchBar;
