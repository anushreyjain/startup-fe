import React from "react";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";

const Navbar = ({ slangOfTheDay }) => {
  return (
    <div className="bg-white w-full flex justify-between items-center py-4 px-4 lg:px-20">
      <Logo src="/logo.svg" alt="logo" width="70%" />
      <div className="hidden lg:flex flex-col space-y-2 text-center w-2/5">
        <Text
          variant="bodySmall"
          fontWeight="font-bold"
          fontFamily={"font-Josefin-Slab"}
          className={"italic text-lg"}
        >
          Slang of the day
        </Text>
        <Text variant="bodySmall" className={"text-secondary-800"}>
          {slangOfTheDay.title}
        </Text>
      </div>
      <div className="cursor-pointer lg:hidden">
        <IcomoonIcon icon={"search"} size="24" />
      </div>
      <Text variant="body" className={"hidden lg:flex cursor-pointer"}>
        Show your creativity
      </Text>
    </div>
  );
};

export default Navbar;
