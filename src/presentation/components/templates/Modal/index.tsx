import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import ButtonIcon from "../../atoms/ButtonIcon";
import Portal from "../Portal";

const SIZES = {
  sm: "max-w-sm",
  md: "max-w-screen-sm",
  lg: "max-w-screen-lg",
};

type ModalProps = {
  title?: string;
  description?: string;
  size?: keyof typeof SIZES;
  isOpen: boolean;
  close: () => void;
  actions?: React.ReactNode;
  children: React.ReactNode;
};

const Modal = ({
  title,
  description,
  actions,
  isOpen,
  size = "md",
  close,
  children,
}: ModalProps) => {
  const clsHidden = isOpen ? "fixed" : "hidden";
  const clsSize = SIZES[size];

  return (
    <Portal container="modals-portal">
      <Card
        className={`${clsHidden} ${clsSize} top-1/4 right-1/2 translate-x-1/2 w-[90vw] z-50`}
      >
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent>{children}</CardContent>
        {actions && (
          <CardFooter className="flex justify-end gap-3">{actions}</CardFooter>
        )}
        <ButtonIcon
          className="absolute top-2 right-2"
          variant={"ghost"}
          icon="Cross"
          onClick={close}
        />
      </Card>
    </Portal>
  );
};

export default Modal;
