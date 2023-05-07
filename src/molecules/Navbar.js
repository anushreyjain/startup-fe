import React from "react";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import BetaBadge from "./BetaBadge";

const Navbar = ({ slangOfTheDay, user }) => {
  const navigate = useNavigate();

  async function signOut() {
    try {
      localStorage.setItem("authToken", null);
      localStorage.setItem("username", null);
      await Auth.signOut();
      navigate("/", { replace: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  const navigateToSignin = () => {
    navigate("/login", { replace: true });
  };
  const handleLogo = () => {
    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="bg-white w-full flex justify-between items-center py-4 px-4 lg:px-20">
      <div className="flex space-x-5 items-center relative">
        <div className="w-16 lg:w-24 z-10">
          <Logo src="/logo.svg" alt="logo" width="100%" onClick={handleLogo} />
        </div>
        <BetaBadge />
        {/* <div className="bg-black absolute -right-[40%] -top-[5px] text-xs text-white rounded px-3 py-1">
          Beta
        </div> */}
      </div>
      <div className="hidden lg:flex flex-col space-y-2 text-center w-2/5">
        <Text
          variant="bodySmall"
          fontWeight="font-bold"
          fontFamily={"font-Josefin-Slab"}
          className={"italic text-lg text-primary-700"}
        >
          Slang of the day
        </Text>
        <Text variant="bodySmall" className={"text-secondary-800"}>
          {slangOfTheDay.title}
        </Text>
      </div>

      {user ? (
        <Text
          variant="body"
          onClick={signOut}
          className={"flex cursor-pointer"}
        >
          Logout
        </Text>
      ) : (
        <>
          <Text
            variant="body"
            onClick={navigateToSignin}
            className={"hidden lg:flex cursor-pointer"}
          >
            Show your Creativity
          </Text>
          <Text
            variant="body"
            onClick={navigateToSignin}
            className={"lg:hidden flex cursor-pointer"}
          >
            Show your Creativity
          </Text>
        </>
      )}
    </div>
  );
};

export default Navbar;
