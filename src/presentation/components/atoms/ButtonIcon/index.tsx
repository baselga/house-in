import { forwardRef } from "react"
import { Button, ButtonProps } from "../../ui/button"
import { iconsObject } from "./icons"

type ButtonIconProps = Omit<ButtonProps, "size"> & {
  icon: keyof typeof iconsObject
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(({ icon, ...rest }, ref) => {
  const Icon = iconsObject[icon]
  return (
    <Button size="icon" {...rest} ref={ref}>
      <Icon className="h-4 w-4" />
    </Button>
  )
})

export default ButtonIcon