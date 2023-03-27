import React, { useState } from "react";
import { useField } from "formik";
import Text from "../atoms/Text";

const TextInput = ({ label, helpText, fontClass, type, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value?.trim().length > 2) || meta.touched;
  return (
    <div
      className={`w-full ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <Text
          variant="large"
          className={fontClass}
          fontFamily={"font-Josefin-Slab"}
          fontWeight={"font-semibold"}
        >
          {label}
        </Text>
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm text-red-500"
          >
            {meta.error}
          </div>
        ) : null}
      </div>
      <input
        className={`w-full pr-10 px-4 text-sm md:text-base py-2 outline-none bg-black-secondary rounded border border-white
             focus:border-primary-900 placeholder:text-neutral-400 ${props.className}`}
        {...props}
        {...field}
        type={type}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      {/* <div className="text-xs mt-2" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div> */}
    </div>
  );
};

export default TextInput;
