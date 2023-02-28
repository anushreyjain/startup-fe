import React from "react";
import Search from "../atoms/Search";
import Text from "../atoms/Text";
import Navbar from "../molecules/Navbar";
import Tabs from "../molecules/Tabs";

const Header = ({
  tabs,
  tabHandler,
  activeTab,
  slangOfTheDay,
  headerRef,
  user,
  property,
}) => {
  return (
    <div ref={headerRef} className="fixed w-full z-10 bg-primary-300">
      <Navbar user={user} slangOfTheDay={slangOfTheDay} />
      <div className="lg:hidden mt-4 flex flex-col space-y-2 text-center py-3 px-4 bg-white mx-4 rounded">
        <Text
          variant="bodySmall"
          fontWeight="font-bold"
          fontFamily={"font-Josefin-Slab"}
          className={"italic text-lg"}
        >
          Slang of the day
        </Text>
        <Text variant="" className={"text-secondary-800 text-xs"}>
          {slangOfTheDay.title}
        </Text>
      </div>
      <Search />
      <Tabs tabs={tabs} tabHandler={tabHandler} activeTab={activeTab} />
    </div>
  );
};

export default Header;
