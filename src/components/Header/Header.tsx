import { FC, useEffect, useState } from "react";
import store from "../../store/store";

import { Search } from "./Search/Search";
import { Button } from "../common/Button/Button";
import { Modal } from "../common/Modal/Modal";
import { AddPhotoForm } from "../Forms/AddPhotoForm";

import logo from "./../../utils/logo-pint.png";
import enter from "./../../utils/enter.png";
import { Enter, HeaderContainer, Logo, LogoImage, EnterImage } from "./styles";
import { observer } from "mobx-react-lite";
import { RegistrationForm } from "../Forms/RegistrationForm";
import { AuthorizationForm } from "../Forms/AuthorizationForm";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const Header: FC = observer(() => {
  const [user, setUser] = useState({});

  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser!);
    });
  },[])


  const openModal = () => {
    store.setIsModal(true);
  };

  const currentModal = () => {
    if (store.currentModal === "AuthorizationForm")
      return <AuthorizationForm />;
    if (store.currentModal === "RegistrationForm") return <RegistrationForm />;
    if (store.currentModal === "AddPhotoForm") return <AddPhotoForm />;
  };
  console.log(user);


  return (
    <HeaderContainer>
      <div className="flex">
        <Logo>
          <LogoImage src={logo} alt="logo" />
          MiniPinterest
        </Logo>

        <Search />
      </div>

      {user ? (
        <>
          <Button children="Add a photo" onClick={openModal} />
          <Button children="log Out" onClick={() => signOut(auth)} />
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

      {/* <Modal children={<RegistrationForm />} isModal={store.isModal} setModal={store.setIsModal} /> */}
    </HeaderContainer>
  );
});
