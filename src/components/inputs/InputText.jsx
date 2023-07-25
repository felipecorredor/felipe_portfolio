import React from "react";

const InputText = ({ inputName, placeholder, register, validate }) => (
  <>
    <span className="text-white font-medium capitalize">Your {inputName}</span>
    <input
      {...register(`${inputName}`, { ...validate })}
      type="text"
      name={inputName}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
    />
  </>
);

export default InputText;
