import { makeAutoObservable } from "mobx";

class store {
  isModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  setIsModal = (newIsModal: boolean) => {
    this.isModal = newIsModal;
  };
}

export default new store();
