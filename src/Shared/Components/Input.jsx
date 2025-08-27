import { useState } from "react";

export function Input({ name = null, id = null, textLabel = null, className = null, initialValue = "", placeholder = null, type = "text" }) {
  const [value, setValue] = useState(initialValue);

  return (
    <>
      <label htmlFor={id}>{textLabel}</label>
      <input id={id} name={name} className={className} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} type={type} />
    </>
  );
}
