import { Home, Contact, FolderGit2 } from "lucide-react";

export const navItems = [
  { id: "home", href: "#home", icon: Home, label: "Home" },
  { id: "projects", href: "#projects", icon: FolderGit2, label: "Projects" },
  { id: "contact", href: "#contact", icon: Contact, label: "Contact" },
];

export const sectionIds = navItems.map((item) => item.id);
