import { FC } from "react";
import icon0 from "./../../../utils/icon0.png";
import icon1 from "./../../../utils/icon1.png";
import icon2 from "./../../../utils/icon2.png";
import icon3 from "./../../../utils/icon3.png";
import icon4 from "./../../../utils/icon4.png";
import icon5 from "./../../../utils/icon5.png";
import icon6 from "./../../../utils/icon6.png";

import { UserIcon } from "./styles";

export const icons: Icons[] = [
  "icon1",
  "icon2",
  "icon3",
  "icon4",
  "icon5",
  "icon6",
];

type Icons = "icon1" | "icon2" | "icon3" | "icon4" | "icon5" | "icon6";

type UserIconProps = {
  icon: Icons;
  onClick?: (e: any) => void;
};

export const Icon: FC<UserIconProps> = ({ icon, ...props }) => {
  if (icon === "icon1") return <UserIcon icon={icon1} {...props} />;
  if (icon === "icon2") return <UserIcon icon={icon2} {...props} />;
  if (icon === "icon3") return <UserIcon icon={icon3} {...props} />;
  if (icon === "icon4") return <UserIcon icon={icon4} {...props} />;
  if (icon === "icon5") return <UserIcon icon={icon5} {...props} />;
  if (icon === "icon6") return <UserIcon icon={icon6} {...props} />;
  return <UserIcon icon={icon0} />;
};
