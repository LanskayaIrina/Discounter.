import React, {MutableRefObject} from "react";
import "./Input.scss";

interface IInputProps {
  value?: string,
  type: string,
  placeholder?: string,
  style: string,
  disabled?: boolean,
  id?: string,
  refInput?: MutableRefObject<HTMLInputElement | null>,

  onChange(term: string): void,

  onBlur?(): void,
}

const Input = ({value, type, placeholder, style, disabled, refInput, id, onChange, onBlur}: IInputProps) => {

  return (
    <input

      value={value}
      type={type}
      placeholder={placeholder}
      name="input"
      className={style}
      disabled={disabled}
      id={id}
      ref={refInput}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      onBlur={onBlur}
      autoComplete="true"
      required
    />
  );
};

export default Input;