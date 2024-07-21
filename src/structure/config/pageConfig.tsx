import { Sticker, Plus, Blocks, Settings2, SquareUser, Triangle, Settings } from "lucide-react";
import MyWidget from "~/structure/pages/myWidget";
import { icon } from "~/constants";
import { Playground } from "../demos/playground";

export interface PageData {
  name: string
  id: string
  label: string;
  icon: icon;
  element?: JSX.Element;
}

export enum PageAdress {
  gallery,
  myWidget,
  settings,
  account,
}

export const PageProps: Record<string, PageData> = {
  [PageAdress.gallery]: { label: "Gallery", icon: Blocks, element: <Playground></Playground> },
  [PageAdress.myWidget]: { label: "My Widget", icon: Sticker, element: <MyWidget /> },
  [PageAdress.settings]: { label: "Settings", icon: Settings },
  [PageAdress.account]: { label: "Account", icon: SquareUser },
};
