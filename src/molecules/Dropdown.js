// import PropTypes from "prop-types";
// import { Controller } from "react-hook-form";
import Select from "react-select";

// const Dropdown = ({
//   id,
//   name,
//   placeholder,
//   dbName,
//   options,
//   isDisable,
//   isClearable,
//   isRequired,
//   isSearchable,
//   isLabel,
//   isError,
//   errorMessage = "Please select a role",
//   labelFor,
//   labelClassName,
//   labelText,
//   register,
//   control,
//   errors,
//   ...rest
// }) => {
//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       background: "#fcfcfc",
//       borderColor: state.isFocused
//         ? "#00CC7F"
//         : errors.userType
//         ? "#DC2020"
//         : "#D1D1DB",
//       borderWidth: "0.5px",
//       minHeight: "47px",
//       height: "47px",
//       borderRadius: "8px",
//       boxShadow: "none",
//     }),

//     option: (provided) => ({
//       ...provided,
//       color: "black",
//       backgroundColor: "white",
//       "&:hover": {
//         backgroundColor: "#F3F3F6",
//       },
//     }),

//     valueContainer: (provided) => ({
//       ...provided,
//       height: "100%",
//       padding: "0 12px",
//     }),

//     input: (provided) => ({
//       ...provided,
//       margin: "0px",
//     }),
//     indicatorSeparator: () => ({
//       display: "none",
//     }),
//     indicatorsContainer: (provided) => ({
//       ...provided,
//       height: "100%",
//     }),
//     dropdownIndicator: (base, state) => ({
//       ...base,
//       color: state.isFocused ? "#00CC7F" : "#D1D1DB",
//     }),
//   };

//   return (
//     <div className={`w-full`}>
//       {labelText ?? (
//         <label
//           htmlFor={labelFor}
//           className={`text-sm text-neutral-800 font-medium  block ${labelClassName}`}
//         >
//           {labelText}
//         </label>
//       )}

//       <Controller
//         control={control}
//         name="userType"
//         rules={{
//           required: true,
//         }}
//         {...register("userType")}
//         render={({ field }) => (
//           <Select
//             className="mt-3"
//             id={id}
//             name={name}
//             isClearable={isClearable}
//             isSearchable={isSearchable}
//             options={options}
//             value={"value"}
//             placeholder={placeholder}
//             styles={customStyles}
//             theme={(theme) => ({
//               ...theme,
//               colors: {
//                 ...theme.colors,
//                 primary: "#00CC7F",
//               },
//             })}
//             {...field}
//             {...rest}
//           />
//         )}
//       />
//       {errors.userType && (
//         <div className="text-red-500 text-sm pt-1 pb-1">{errorMessage}</div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

// Dropdown.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   isRequired: PropTypes.bool,
//   isError: PropTypes.bool,
//   errorClass: PropTypes.string,
//   options: PropTypes.array,
//   labelFor: PropTypes.string,
//   labelClassName: PropTypes.string,
//   labelText: PropTypes.string,
//   isDisabled: PropTypes.bool,
//   isClearable: PropTypes.bool,
//   isSearchable: PropTypes.bool,
//   isMulti: PropTypes.bool,
//   errors: PropTypes.object,
// };

import React from "react";
import Text from "../atoms/Text";

const Dropdown = ({ options, labelText }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fcfcfc",
      borderColor: state.isFocused ? "#AC916B" : "#fcfcfc" ,
      "&:hover": {
        borderColor: state.isFocused? '#AC916B' : "#B6B0A8",
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
            color: '#BEBEBE',
        }
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
      <Select
        options={options}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#AC916B",
          },
        })}
      />
    </div>
  );
};

export default Dropdown;
