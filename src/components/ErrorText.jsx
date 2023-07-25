import React from "react";

const ErrorText = ({ message = "This field is required" }) => (
  <span className="text-[12px] text-secondary mt-2">{message}</span>
);

export default ErrorText;
