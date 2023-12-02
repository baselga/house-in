import { useCallback } from "react";

type valueType = string | number

type SelectInputProps<T extends valueType> = Omit<React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>, "onChange"> & {
  value: T | undefined;
  choices: Array<{ id: T; name: string | number }>;
  onChange: (value: T) => void;
};

function SelectInput<T extends valueType>({ value, choices, onChange, ...rest }: SelectInputProps<T>) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value as T);
    },
    [onChange]
  );

  return (
    <select
      className="h-9 rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      value={value}
      onChange={handleChange}
      {...rest}
    >
      {choices.map(({ id, name }) => (
        <option
          key={id}
          className="bg-white"
          value={id}
          selected={value === id}
        >
          {name}
        </option>
      ))}
    </select>
  );
}
export default SelectInput;
