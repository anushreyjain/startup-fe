import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import debounce from "../functions/debounce";

const Card = ({
  title,
  id,
  description,
  likes,
  status,
  activeTab,
  isAdmin,
  openSlangHandler,
}) => {
  const myRef = useRef();
  const [width, setwidth] = useState("");

  const debounceGetClientWidth = debounce(function getClientWidth() {
    const width = myRef.current?.clientWidth;
    setwidth(width);
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", debounceGetClientWidth);
  }, []);

  const navigate = useNavigate();

  const handleBookmark = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log("bookmarked");
    } catch (error) {
      navigate("/login", { replace: true });
    }
  };

  const handleLike = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log("liked");
    } catch (error) {
      navigate("/login", { replace: true });
    }
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("deleted");
  };

  return (
    <div className="p-4 w-full justify-self-center min-h-[150px] group flex flex-col rounded bg-white hover:drop-shadow-sm active:scale-95 transform transition-all">
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <Text
            fontFamily={"font-Josefin-Slab"}
            fontWeight="font-bold"
            className={"text-base md:text-xl flex-grow cursor-pointer mr-5"}
            variant=""
            onClick={openSlangHandler}
          >
            {title}
          </Text>

          <IcomoonIcon
            icon={"bookmark-outline"}
            size="20"
            className="lg:hidden group-hover:block flex-shrink-0 cursor-pointer"
            onClick={handleBookmark}
          />
        </div>
        <div ref={myRef} className="cursor-pointer" onClick={openSlangHandler}>
          <Text
            className={`text-secondary-800 text-sm max-w-[${width}] three-line-clamp flex-grow md:text-base`}
          >
            {description}
          </Text>
        </div>
      </div>
      <div className="flex mt-3 justify-between items-center w-full  h-6">
        <div
          className="flex-shrink-0 flex space-x-1 items-center cursor-pointer "
          onClick={handleLike}
        >
          <IcomoonIcon icon={"thumb-up-outline"} size="20" />
          <Text variant="" className={"text-sm"} fontWeight="font-medium">
            {likes}
          </Text>
        </div>
        <div className="flex space-x-3 items-center ">
          {isAdmin && (
            <>
              <IcomoonIcon
                icon={"pencil-square"}
                size="20"
                className="lg:hidden group-hover:block cursor-pointer"
                onClick={handleEdit}
              />
              <IcomoonIcon
                icon={"trash"}
                size="20"
                color={"red"}
                className="lg:hidden group-hover:block cursor-pointer"
                onClick={handleDelete}
              />
            </>
          )}
          {activeTab === "my-creativity" && (
            <>
              {status === "approved" ? (
                <IcomoonIcon icon={"check-badge"} size="20" />
              ) : status === "pending" ? (
                <IcomoonIcon icon={"clock"} size="20" />
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
