import { observer } from "mobx-react-lite";
import { FC, useRef, useEffect, MouseEventHandler, useState } from "react";
import { useInput } from "../../hooks/useInput";
import store from "../../store/store";

import { v4 } from "uuid";
import { db } from "../../firebase";
import { set, ref } from "firebase/database";

import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/styles";

import { Cancel, FormContainer, Label } from "./styles";


export const AddPhotoForm: FC = observer(() => {
  const [hint, setHint] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    value: description,
    onChange: onChangeDescription,
    error: descriptionError,
    onBlur: onBlurDescription,
    clear: clearDescription,
  } = useInput("", true, "Придумай небольшое описание картинки");

  const {
    value: url,
    onChange: onChangeUrl,
    error: urlError,
    onBlur: onBlurUrl,
    clear: clearUrl,
  } = useInput("", true, "Добавь ссылку на картинку");

  const handleClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    clearDescription();
    clearUrl();
    store.setIsModal(false);
  };

  const addPhoto: MouseEventHandler<HTMLButtonElement> = () => {
    if (!url || !description) {
      setHint("Заполни все поля");
    } else {
      const uuid = v4();
      set(ref(db, `/${uuid}`), { id: uuid, url, description });
      setHint(null);
      store.setIsModal(false);

      clearDescription();
      clearUrl();
    }
  };
  
  useEffect(() => {
    if (store.isModal === true) inputRef.current!.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.isModal]);

  return (
    <FormContainer>
      <Label>
        Description
        <Input
          ref={inputRef}
          value={description ? description : ""}
          onChange={onChangeDescription}
          onBlur={onBlurDescription}
        />
        <div className="error">{descriptionError}</div>
      </Label>

      <Label>
        Photo URL
        <Input
          value={url ? url : ""}
          onChange={onChangeUrl}
          onBlur={onBlurUrl}
        />
        <div className="error">{urlError}</div>
      </Label>

      {hint && <div className="error">{hint}</div>}

      <div className="flex right">
        <Cancel children="Cancel" onClick={handleClickCancel} />
        <Button children="Submit" onClick={addPhoto} />
      </div>
    </FormContainer>
  );
});
