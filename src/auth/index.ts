import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import store from "../store/store";

export const register = async (
  email: string,
  password: string,
  setHint: (arg: string) => void
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    store.setIsModal(false);
    store.setCurrentModal("AddPhotoForm");

  } catch (error) {
    setHint("Некорректный email/пароль");
  }
};

export const login = async (
  email: string,
  password: string,
  setHint: (arg: string) => void,
  clearEmail: () => void,
  clearPassword: () => void
) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    clearEmail();
    clearPassword();
    store.setIsModal(false);
    store.setCurrentModal("AddPhotoForm");
    
  } catch (error) {
    setHint("Неверный email/пароль");
  }
};
