import EdiblePage from "../pages/EdiblePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export type SectionKey = "login" | "home" | "edible";
export interface SectionConfig {
  label: string;
  path: string;
  view: JSX.Element;
  private: boolean
}

export const SECTIONS: Record<SectionKey, SectionConfig> = {
  login: {
    label: "login",
    view: <LoginPage />,
    path: "login",
    private: false
  },
  home: {
    label: "",
    view: <HomePage />,
    path: "/",
    private: true
  },
  edible: {
    label: "Despensa",
    path: "/despensa",
    view: <EdiblePage />,
    private: true
  },
};
