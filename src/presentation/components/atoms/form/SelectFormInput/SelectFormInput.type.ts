
export type SelectFormInputOptionValue = string | number
export type SelectFormInputOptionLabel = string | number

export type SelectFormInputOption = {
  value: SelectFormInputOptionValue;
  label: SelectFormInputOptionLabel;
};

export type SelectFormInputProps = {
  label?: string;
  source: string;
  options: SelectFormInputOption[];
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  disabled?: boolean;
  isClearable?: boolean;
};