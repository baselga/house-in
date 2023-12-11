import { forwardRef } from "react";
import { Button, ButtonProps } from "../../ui/button";
import { iconsObject } from "./icons";
import Loading from "../Loading";

type ButtonIconProps = Omit<ButtonProps, "size"> & {
  icon: keyof typeof iconsObject;
  isLoading?: boolean;
};

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, isLoading = false, disabled, ...rest }, ref) => {
    const Icon = iconsObject[icon];
    return (
      <Button size="icon" disabled={disabled || isLoading} {...rest} ref={ref}>
        {isLoading ? (
          <Loading size="small" />
        ) : (
          <Icon className="h-4 w-4" />
        )}
      </Button>
    );
  }
);

export default ButtonIcon;
