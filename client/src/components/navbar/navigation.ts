import { FaTiktok } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { NavigationItem } from "../../interfaces/navigation";

export const navigation: NavigationItem[] = [
  { name: "Home", href: "/", icon: FaTiktok },
  { name: "Upload", href: "/new", icon: FaPlus },
];
