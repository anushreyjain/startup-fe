import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Text from "../atoms/Text";

const Textarea = ({
  variant = "default",
  id = "",
  name,
  placeholder,
  fontColor,
  height = "min-h-[80px]",
  className = "leading-5",
  disabled,
  register = () => {},
  onChangeValue = () => {},
  value,
  rows = 1,
  label,
  ...property
}) => {
  const textAreaField = register(id);

  const MIN_TEXTAREA_HEIGHT = 40;
  const textareaRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState(value || "");

  useEffect(() => {
    setTextareaValue(value || "");
  }, [value]);

  const onChange = (event) => setTextareaValue(event.target.value);

  useLayoutEffect(() => {
    textareaRef.current.style.height = "inherit";
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [textareaValue]);
  return (
    <div className="flex flex-col space-y-1 w-full">
      <Text
        variant="large"
        className={fontColor}
        fontFamily={"font-Josefin-Slab"}
        fontWeight={"font-semibold"}
      >
        {label}
      </Text>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full p-3 text-sm md:text-base rounded placeholder:text-neutral-400 text-black outline-none no-scrollbar border border-white focus:border-primary-900 disable:pointer-events-none ${height} ${className} `}
        {...textAreaField}
        onChange={(e) => {
          //if (textAreaField) { textAreaField.onChange(e); }
          onChangeValue(e);
          onChange(e);
        }}
        ref={textareaRef}
        value={textareaValue}
        rows={rows}
        {...property}
      ></textarea>
    </div>
  );
};

export default Textarea;
