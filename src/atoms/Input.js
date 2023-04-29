import PropTypes from "prop-types";

const Input = ({ type, placeholder, register, name, ...property }) => (
  <div className="relative w-full h-full">
    <input
      name={name}
      {...(register && { ...register(name) })}
      type={type}
      placeholder={placeholder}
      className={`w-full pr-10 px-4 text-sm md:text-base py-2 outline-none bg-black-secondary appearance-none border border-white
             focus:border-primary-900 placeholder:text-neutral-400 select-none ${property.className}`}
      {...property}
    />
  </div>
);

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
