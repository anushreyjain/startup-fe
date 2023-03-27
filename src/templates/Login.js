import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import { Amplify, Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import awsConfig from "../aws-exports";
import { getFromUser } from "../apis/user.api";

Amplify.configure(awsConfig);

const Login = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        default:
          break;
      }
    });

    Auth.currentAuthenticatedUser()
    .then((currentUser) => setUser(currentUser))
      .catch(() => console.log("Not signed in"));
    return unsubscribe;
  }, []);
  return (
    <div className="fixed px-6 md:px-0 h-screen w-full bg-primary-300 flex justify-center items-center">
      <div className="text-center">
        <div className="rounded flex flex-col items-center px-14 py-12 md:px-24 md:py-16 bg-white">
          <Logo src="/logo.svg" alt="logo" />
          <div className="flex flex-col space-y-2 text-center mt-10">
            <Text
              className={"text-lg md:text-2xl text-center"}
              fontFamily="font-Josefin-Slab"
              fontWeight="font-bold"
              variant=""
            >
              Welcome Back!
            </Text>
            <Text variant="body">
              Kindly login with your <br /> google account to continue.
            </Text>
          </div>
          <Button
            iconUrl={"google"}
            iconSize="22"
            iconColor={"white"}
            iconView
            type="contained"
            size={"default"}
            iconPosition="Left"
            className="mt-8 font-semibold"
            onClick={() =>
              Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Google,
              })
            }
          >
            Sign in with Google
          </Button>
        </div>
        <Text variant="bodySmall" className={"text-secondary-900 mt-6"}>
          Copyright © 2022, Slanguse. All rights reserved.
        </Text>
      </div>
    </div>
  );
};

export default Login;
