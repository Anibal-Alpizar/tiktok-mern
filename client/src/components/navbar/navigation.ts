import { FaTiktok } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { NavigationsItem, MainNavigation } from "../../interfaces/navigation";

export const navigations: NavigationsItem[] = [
  { name: "Upload", href: "/new", icon: FaPlus },
  // { name: "", href: "/", icon: FiSend },
  { name: "Log in", href: "", icon: ""},
];

export const mainNavigation: MainNavigation[] = [
  { name: "TikTok", href: "/", icon: FaTiktok },
];
