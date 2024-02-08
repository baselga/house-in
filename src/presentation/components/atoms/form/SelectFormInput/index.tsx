import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { useFormContext } from "react-hook-form";
import Select, { SingleValue } from "react-select";
import { SelectFormInputOption, SelectFormInputProps } from "./SelectFormInput.type";
import { getValue, handleSigleChange, handleMultiChange } from "./utils";

const SelectFormInput = ({
  label,
  source,
  placeholder,
  helperText,
  multiple,
  options,
  disabled,
  isClearable,
}: SelectFormInputProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={source}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Select
              {...field}
              options={options}
              placeholder={placeholder}
              isDisabled={disabled}
              isMulti={multiple}
              isClearable={isClearable}
              value={getValue(field.value, options)}
              onChange={(value) => {
                if (Array.isArray(value)) {
                  handleMultiChange(value, field.onChange);
                } else {
                  handleSigleChange(value as SingleValue<SelectFormInputOption>, field.onChange);
                }
              }}
            />
          </FormControl>
          {helperText && <FormDescription>{helperText}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectFormInput;
