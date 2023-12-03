import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { useFormContext } from "react-hook-form";

type TextFormInputProps = {
  label?: string;
  source: string;
  placeholder?: string;
  helperText?: string;
};

const TextFormInput = ({
  label,
  source,
  placeholder,
  helperText,
}: TextFormInputProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={source}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input type="text" placeholder={placeholder} {...field} />
          </FormControl>
          {helperText && <FormDescription>{helperText}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextFormInput;
