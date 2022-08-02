import { FC, useEffect } from "react";
import store from "../../store/store";

import { Search } from "./Search/Search";
import { Modal } from "../common/Modal/Modal";
import { AddPhotoForm } from "../Forms/AddPhotoForm";

import { observer } from "mobx-react-lite";
import { RegistrationForm } from "../Forms/RegistrationForm";
import { AuthorizationForm } from "../Forms/AuthorizationForm";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

import logo from "./../../utils/logo-pint.png";
import enter from "./../../utils/enter.png";
import { Icon } from "../common/Icon/UserIcon";

import { Enter, HeaderContainer, Logo, LogoImage, EnterImage } from "./styles";

export const Header: FC = observer(() => {
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      store.setUser(currentUser);
    });
  }, []);

  const openModal = () => {
    store.setIsModal(true);
  };

  const currentModal = () => {
    if (store.currentModal === "AuthorizationForm")
      return <AuthorizationForm />;
    if (store.currentModal === "RegistrationForm") return <RegistrationForm />;
    if (store.currentModal === "AddPhotoForm") return <AddPhotoForm />;
  };

  const userClick = () => {
    store.setIsSideBar(true);
  };

  return (
    <HeaderContainer>
      <div className="flex">
        <Logo>
          <LogoImage src={logo} alt="logo" />
          MiniPinterest
        </Logo>

        <Search />
      </div>


      {store.user ? (
        <>
          <Icon
            icon={store.user?.photoURL ? store.user.photoURL : "icon0"}
            onClick={userClick}
          />
        </>
      ) : (
        <Enter onClick={openModal}>
          <EnterImage src={enter} alt="enter" />
          Sign In
        </Enter>
      )}

      <Modal
        children={currentModal()}
        isModal={store.isModal}
        setModal={store.setIsModal}
      />
    </HeaderContainer>
  );
});
