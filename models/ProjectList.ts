import { SlLink } from "react-icons/sl";
import { ReactNode } from "react";

interface ProjectList {
  id: string;
  position: "left" | "right";
  image: string;
  title: string;
  subtitle: string | ReactNode;
  chips: { id: string; name: string }[];
  buttons: { id: string; name: string; redirect: string; icon: ReactNode }[];
}

export const projectList: ProjectList[] = [
  {
    id: "1",
    title: "Netflix clone",
    subtitle:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "/project_image.jpg",
    chips: [
      { id: "1", name: "VS Code" },
      { id: "2", name: "Sublime text" },
      { id: "4", name: "Hyper" },
      { id: "3", name: "React" },
    ],
    buttons: [
      { id: "1", name: "Visit", redirect: "/", icon: null },
      { id: "2", name: "Github", redirect: "/", icon: null },
    ],
    position: "left",
  },
  {
    id: "2",
    title: "Netflix clone",
    subtitle:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "/project_image.jpg",
    chips: [
      { id: "1", name: "VS Code" },
      { id: "2", name: "Sublime text" },
      { id: "4", name: "Hyper" },
      { id: "3", name: "React" },
    ],
    buttons: [
      { id: "1", name: "Visit", redirect: "/", icon: null },
      { id: "2", name: "Github", redirect: "/", icon: null },
    ],
    position: "right",
  },
  {
    id: "3",
    title: "Netflix clone",
    subtitle:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "/project_image.jpg",
    chips: [
      { id: "1", name: "VS Code" },
      { id: "2", name: "Sublime text" },
      { id: "4", name: "Hyper" },
      { id: "3", name: "React" },
    ],
    buttons: [
      { id: "1", name: "Visit", redirect: "/", icon: null },
      { id: "2", name: "Github", redirect: "/", icon: null },
    ],
    position: "left",
  },
];
