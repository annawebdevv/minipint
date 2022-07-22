import { useState, ChangeEvent, FocusEvent } from "react";

export const useInput = (
  initialValue?: string | null,
  required?: boolean,
  textError?: string
) => {
  const [value, setValue] = useState(initialValue);

  const [error, setError] = useState<string | null>(null);

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!event.target.value.trim() && required)
      setError(textError ? textError : "Required field");
    else setError(null);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setError(null);
    setValue("");
  };

  return { value, error, onBlur, onChange, clear };
};
