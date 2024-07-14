import { createRoot } from "react-dom/client";
import SidebarContent from "./sidebarContent";
import ContentScriptModule from "../../scripts/custom/contentScriptModule";
import { TW } from "./tailwindContent";

const width = 400;
const className = "sidebar";
const sidebarStyles = `.${className} {
            height: 100vh;
            width: ${width}px;
            position: fixed;
            top: 0px;
            transition: right 0.4s ease;
            transition-delay: 0.05s;
            z-index: 100
          }`;

class Sidebar extends ContentScriptModule {
  private root: HTMLDivElement;
  private open: boolean = false;

  constructor() {
    super();
    const rootElement = document.createElement("div");
    const rootShadow = rootElement.attachShadow({ mode: "closed" });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(sidebarStyles + " " + TW);
    rootShadow.adoptedStyleSheets = [sheet];

    const sidebar = document.createElement("div");
    sidebar.className = className;
    sidebar.style.setProperty("right", `${-width}px`);
    rootShadow.appendChild(sidebar);
    document.body.appendChild(rootElement);
    const root = createRoot(sidebar);
    root.render(<SidebarContent></SidebarContent>);

    this.root = sidebar;
  }

  listen(message, sender) {
    if (message == "toggle") this.toggle();
  }

  private toggle = () => {
    this.root.style.right = this.open ? `${-width}px` : "0px";
    this.open = !this.open;
  };
}

export default Sidebar;
