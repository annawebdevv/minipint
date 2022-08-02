import { observer } from "mobx-react-lite";
import { FC, useRef, MouseEventHandler } from "react";
import store from "../../store/store";

import { getAuth, updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";

import { Button } from "../common/Button/Button";

import { icons, Icon } from "../common/Icon/UserIcon";
import exit from "./../../utils/exit.png";

import { ExitImage, LogOut, SideBarContainer, Wrapper } from "./styles";



export const SideBar: FC = observer(() => {
  const overLayRef = useRef<HTMLDivElement>(null);
  const auth = getAuth();

  const openModal = () => {
    store.setIsModal(true);
  };

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = ({
    target,
  }) => {
    if (target === overLayRef.current) store.setIsSideBar(false);
  };

  const handleSignOut: MouseEventHandler<HTMLDivElement> = () => {
    signOut(auth);
    store.setIsSideBar(false);
    store.setCurrentModal("AuthorizationForm");
  };

  const changeUserIcon = (e: any, url: string) => {
    updateProfile(auth.currentUser!, {
      photoURL: url,
    }).then(() => console.log("first"));
  };


  
  return (
    <Wrapper
      ref={overLayRef}
      onClick={handleOverlayClick}
      visible={store.isSideBar}>
      <SideBarContainer>
        <div className="flex">
          <Icon icon={store.user?.photoURL ? store.user.photoURL : "icon0"} />
          {store.user?.email}
        </div>

        <div>
          {icons.map((icon) => (
            <Icon icon={icon} onClick={(e) => changeUserIcon(e, icon)} />
          ))}
        </div>

        <Button children="Add a photo" onClick={openModal} />

        <LogOut onClick={handleSignOut}>
          Sing out
          <ExitImage src={exit} alt="Exit" />
        </LogOut>
      </SideBarContainer>
    </Wrapper>
  );
});
