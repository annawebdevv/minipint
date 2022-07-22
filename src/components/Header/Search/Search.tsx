import { FC, useEffect } from "react";
import { useDebounce } from "../../../hooks/useDebounsed";
import { useInput } from "../../../hooks/useInput";
import { Input } from "../../common/Input/styles";

import { SearchContainer, SearchIcon } from "./styles";

export const Search: FC = () => {
  const { value, onChange } = useInput("");

  const debounce = useDebounce(value, 400);

  useEffect(() => {
    //request
  }, [debounce]);

  return (
    <SearchContainer>
      <Input
        placeholder="Search by tags..."
        value={value ? value : ""}
        onChange={onChange}
      />
      <SearchIcon />
    </SearchContainer>
  );
};
