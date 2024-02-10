import {
  SelectFormInputOption,
  SelectFormInputOptionValue,
} from "./SelectFormInput.type";

export function handleSigleChange(
  option: SelectFormInputOption | null,
  onChange: (value: string | number | (string | number)[] | [] | null) => void,
) {
  if (option === null) {
    onChange(null);
  } else {
    onChange(option?.value || null);
  }
}

export function handleMultiChange(
  option: readonly SelectFormInputOption[] | null,
  onChange: (value: string | number | (string | number)[] | [] | null) => void,
) {
  if (option === null) {
    onChange(null);
  } else {
    onChange(option.map((each) => each.value));
  }
}

export function getValue(
  value:
    | SelectFormInputOptionValue
    | readonly SelectFormInputOptionValue[]
    | null,
  options: SelectFormInputOption[],
): SelectFormInputOption | SelectFormInputOption[] | null {
  if (!value) return null;

  if (Array.isArray(value)) {
    return options.filter((option) => value.includes(option.value));
  }

  return options.find((option) => option.value === value) || null;
}
