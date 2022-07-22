import { FC } from "react";
import logo from "./../../utils/logo-pint.png";
import store from "../../store/store";
import { HeaderContainer, Logo, LogoImage } from "./styles";
import { Search } from "./Search/Search";
import { Button } from "../common/Button/Button";
import { Modal } from "../common/Modal/Modal";
import { AddPhotoForm } from "./AddPhotoForm/AddPhotoForm";

export const Header: FC = () => {
  const openModal = () => {
    store.setIsModal(true);
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
      <Button children="Add a photo" onClick={openModal} />
      <Modal children={<AddPhotoForm />} />
    </HeaderContainer>
  );
};
