import React, { useMemo } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  container?: "drawers-portal" | "modals-portal";
  children: React.ReactNode;
};

const Portal = (props: PortalProps) => {
  const { container, children } = props;
  const containerEl = useMemo(() => {
    if (!container) return document.body;
    return document.getElementById(container);
  }, [container]);

  return containerEl ? createPortal(children, containerEl) : children;
};

export default Portal;
