import { FaTiktok } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import {
  navigationsItem,
  mainNavigation as main,
} from "../../interfaces/navbar/navigation";

export const mainNavigation: main[] = [
  { name: "TikTok", href: "/", icon: FaTiktok },
];

export const navigations: navigationsItem[] = [
  { name: "Upload", href: "/new", icon: FaPlus },
  // { name: "", href: "/", icon: FiSend },
  { name: "Log in", href: "", icon: "" },
];

