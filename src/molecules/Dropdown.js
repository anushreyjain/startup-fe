import Select from "react-select";

import React, { useState } from "react";
import Text from "../atoms/Text";
import { useField } from "formik";

const Dropdown = ({
  options,
  value,
  onChange,
  name,
  labelText,
  id,
  ...props
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fcfcfc",
      borderColor: state.isFocused ? "#AC916B" : "#fcfcfc",
      "&:hover": {
        borderColor: state.isFocused ? "#AC916B" : "#B6B0A8",
      },
      borderWidth: "0.5px",
      minHeight: "38px",
      height: "38px",
      borderRadius: "4px",
      boxShadow: "none",
      "@media only screen and (min-width: 786px)": {
        minHeight: "42px",
        height: "42px",
      },
    }),

    placeholder: (provided) => {
      return {
        ...provided,
        color: "#BEBEBE",
      };
    },

    option: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#FCFCFC",
      },
    }),

    valueContainer: (provided) => ({
      ...provided,
      height: "100%",
      padding: "0 12px",
    }),

    input: (provided) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "100%",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? "#AC916B" : "#D1D1DB",
    }),
  };

  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const handleValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div className="w-full flex flex-col space-y-1">
      <Text
        fontFamily={"font-Josefin-Slab"}
        fontWeight="font-semibold"
        variant="large"
        className={"text-secondary-900"}
      >
        {labelText} 
      </Text>

      <div>
        <Select
          {...props}
          {...field}
          value={handleValue(options, value)}
          onChange={(value) => onChange(value)}
          id={id}
          name={name}
          options={options}
          styles={customStyles}
          onFocus={handleFocus}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#AC916B",
            },
          })}
        />
      </div>
    </div>
  );
};

export default Dropdown;
