import { makeAutoObservable } from "mobx";
import { Modal } from "../types/types";

class store {
  user : any = null 
  isModal: boolean = false;
  isSideBar: boolean = false;
  currentModal: Modal = "AuthorizationForm"
  isModalAddPhoto: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  setIsModal = (isModal: boolean) => {
    this.isModal = isModal;
  };
  setIsSideBar = (isSideBar: boolean) => {
    this.isSideBar = isSideBar;
  };
  setCurrentModal = (modal: Modal) => {
    this.currentModal = modal;
  };
  setUser = (user: any) => {
    this.user = user;
}
}
export default new store();
