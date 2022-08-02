import { FC, useRef, useEffect, MouseEventHandler, useState } from "react";
import { useInput } from "../../hooks/useInput";
import store from "../../store/store";

import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/styles";

import { FormContainer, Label, Link } from "./styles";

import { register } from "../../auth";

export const RegistrationForm: FC = () => {
  const [hint, setHint] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    value: email,
    onChange: onChangeEmail,
    error: emailError,
    onBlur: onBlurEmail,
    clear: clearEmail,
  } = useInput("", true, "Введите Email");

  const {
    value: password,
    onChange: onChangePassword,
    error: passwordError,
    onBlur: onBlurPassword,
    clear: clearPassword,
  } = useInput("", true, "Введите пароль");

  const toAuth: MouseEventHandler<HTMLElement> = () => {
    clearEmail();
    clearPassword();
    store.setCurrentModal("AuthorizationForm");
  };

  const handleSubmit= () => {
    if (!password || !email) {
      setHint("Заполни все поля");
    } else {
      register(email, password, setHint);

    }
  };

  const EnterKeydown = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (store.isModal === true) inputRef.current!.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.isModal]);

  useEffect(() => {
    window.addEventListener("keydown", EnterKeydown);
    return () => {
      window.removeEventListener("keydown", EnterKeydown);
    };
  });
  return (
    <FormContainer>
      <h3>Registration </h3>
      <hr />
      <Label>
        Email
        <Input
          ref={inputRef}
          value={email ? email : ""}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
        />
        <div className="error">{emailError}</div>
      </Label>

      <Label>
        Password
        <Input
          type="password"
          value={password ? password : ""}
          onChange={onChangePassword}
          onBlur={onBlurPassword}
        />
        <div className="error">{passwordError}</div>
      </Label>

      {hint && <div className="error">{hint}</div>}

      <div className="flex space-btw">
        <Link children="or Sign In" onClick={toAuth} /> 

        <Button children="Sign Up" onClick={handleSubmit} />
      </div>
    </FormContainer>
  );
};
