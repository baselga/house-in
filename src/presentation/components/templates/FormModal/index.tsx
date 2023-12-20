import React from "react";
import { FieldValues, UseFormProps, useForm } from "react-hook-form";
import { Form } from "@/presentation/components/ui/form";
import ButtonIcon from "../../atoms/ButtonIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

const SIZES = {
  sm: "max-w-sm",
  md: "max-w-screen-sm",
  lg: "max-w-screen-lg",
};

type FormModalProps<T extends FieldValues> = {
  title?: string;
  description?: string;
  size?: keyof typeof SIZES;
  isOpen: boolean;
  close: () => void;
  actions?: React.ReactNode;
  children: React.ReactNode;
  onSubmit: (values: T) => void;
  formProps?: UseFormProps<T>;
};

function FormModal<T extends FieldValues>({
  title,
  description,
  actions,
  isOpen,
  size = "md",
  close,
  children,
  onSubmit,
  formProps,
}: FormModalProps<T>) {
  const clsHidden = isOpen ? "fixed" : "hidden";
  const clsSize = SIZES[size];
  const form = useForm<T>(formProps);

  return (
    <Card
      className={`${clsHidden} ${clsSize} top-1/4 right-1/2 translate-x-1/2 w-[90vw] z-50`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {(title || description) && (
            <CardHeader>
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          <CardContent>{children}</CardContent>
          {actions && (
            <CardFooter className="flex justify-end gap-3">
              {actions}
            </CardFooter>
          )}
          <ButtonIcon
            className="absolute top-2 right-2"
            variant={"ghost"}
            icon="Cross"
            onClick={close}
          />
        </form>
      </Form>
    </Card>
  );
}

export default FormModal;
