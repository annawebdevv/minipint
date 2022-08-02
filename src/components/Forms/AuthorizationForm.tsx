import {
  FC,
  useRef,
  useEffect,
  MouseEventHandler,
  useState,
} from "react";
import { useInput } from "../../hooks/useInput";
import store from "../../store/store";

import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/styles";

import { Link, FormContainer, Label } from "./styles";

import { login } from "../../auth";

export const AuthorizationForm: FC = () => {
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

  const toRegestration: MouseEventHandler<HTMLElement> = () => {
    clearEmail();
    clearPassword();
    store.setCurrentModal("RegistrationForm");
  };

  const handleSubmit = () => {
    if (!password || !email) {
      setHint("Заполни все поля");
    } else {
      try {
        login(email, password, setHint, clearEmail, clearPassword);
      } catch (e) {
        console.log("first");
      }
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
      <h3>Authorization</h3>
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
        <Link children="or Sign Up" onClick={toRegestration} />

        <Button children="Sign In" onClick={handleSubmit} />
      </div>
    </FormContainer>
  );
};
