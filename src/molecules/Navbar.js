import React from "react";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const Navbar = ({ slangOfTheDay, user }) => {
  const navigate = useNavigate();

  async function signOut() {
    try {
      await Auth.signOut();
      navigate("/", { replace: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  const navigateToSignin = () => {
    navigate("/login", { replace: true });
  };

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

      {user ? (
        <Text
          variant="body"
          onClick={signOut}
          className={"hidden lg:flex cursor-pointer"}
        >
          Logout
        </Text>
      ) : (
        <Text
          variant="body"
          onClick={navigateToSignin}
          className={"hidden lg:flex cursor-pointer"}
        >
          Show your Creativity
        </Text>
      )}
    </div>
  );
};

export default Navbar;
