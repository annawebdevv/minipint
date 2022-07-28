import { makeAutoObservable } from "mobx";
import { Modal } from "../types/types";

class store {
  isModal: boolean = false;
  currentModal: Modal = "AuthorizationForm"
  isModalAddPhoto: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  setIsModal = (isModal: boolean) => {
    this.isModal = isModal;
  };
  setCurrentModal = (modal: Modal) => {
    this.currentModal = modal;
  };
}

export default new store();
