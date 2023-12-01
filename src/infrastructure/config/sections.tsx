import EdiblePage from "../features/pages/EdiblePage";
import HomePage from "../features/pages/HomePage";

export type SectionKey = 'home' | 'edible';
export interface SectionConfig {
  label: string;
  path: string;
  view?: JSX.Element;
}


export const SECTIONS: Record<SectionKey, SectionConfig> = {
  home: {
    label: "",
    view: <HomePage />,
    path: "",
  },
  edible: {
    label: "Despensa",
    path: "/despensa",
    view: <EdiblePage />,
  }
}
