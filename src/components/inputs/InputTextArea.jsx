import React from "react";

const InputTextArea = ({ inputName, placeholder, register }) => (
  <>
    <span className="text-white font-medium capitalize">Your {inputName}</span>
    <textarea
      {...register(`${inputName}`, { required: true })}
      rows={7}
      name={inputName}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </>
);
export default InputTextArea;
