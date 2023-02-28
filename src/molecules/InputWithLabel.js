import PropTypes from "prop-types";
import Text from "../atoms/Text";
import Input from "../atoms/Input";

const InputWithLabel = ({
  label,
  text,
  type,
  placeholder,
  register,
  name,
  errored,
  fontColor,
  ...property
}) => (
  <div className={`flex flex-col space-y-1 w-full ${property.className}`}>
    <Text
      variant="large"
      className={fontColor}
      fontFamily={"font-Josefin-Slab"}
      fontWeight={"font-semibold"}
    >
      {label}
    </Text>
    <Input
      register={register}
      errored={errored}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

export default InputWithLabel;

InputWithLabel.propTypes = {
  className: PropTypes.string,
};
