import React, { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  id?: string;
  placeholder?: string;
  name?:string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  id = '',
  name ='',
  value = '',
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full h-14 p-3 rounded-lg bg-gray-100"
    />
  );
};

export default Input;