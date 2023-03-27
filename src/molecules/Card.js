import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromProtected } from "../apis/protected.api";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import debounce from "../functions/debounce";

const Card = ({ activeTab, tabHandler, isAdmin, slang, openSlangHandler }) => {
  const {
    title,
    _id: id,
    description,
    likes,
    status,
    bookmarked,
    liked,
  } = slang;
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
      await Auth.currentAuthenticatedUser();
      const bookmarkPost = await getFromProtected({
        query: "bookmarkSlang",
        fields: ["_id", "title", "description", "likes", "bookmarked", "liked"],
        variables: { id },
      });
      await tabHandler(activeTab);
    } catch (error) {
      navigate("/login", { replace: true });
    }
  };

  const handleLike = async (id) => {
    try {
      console.log(tabHandler);
      const authUser = await Auth.currentAuthenticatedUser();
      console.log(authUser);
      const likedPost = await getFromProtected({
        query: "likeSlang",
        fields: ["_id", "title", "description", "likes", "bookmarked", "liked"],
        variables: { id },
      });
      console.log(likedPost);
      await tabHandler(activeTab);
    } catch (error) {
      console.log(error);
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
            icon={bookmarked ? "bookmark" : "bookmark-outline"}
            size="20"
            className={` ${
              bookmarked ? "" : "lg:hidden group-hover:block"
            } flex-shrink-0 cursor-pointer`}
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
      <div className="flex mt-3 justify-between items-center w-full ">
        <div
          className="flex-shrink-0 flex space-x-1 items-center cursor-pointer"
          onClick={() => handleLike(id)}
        >
          <IcomoonIcon
            icon={liked ? "thumb-up" : "thumb-up-outline"}
            size="20"
          />
          <Text variant="" className={"text-sm"} fontWeight="font-medium">
            {likes}
          </Text>
        </div>
        <div className="flex space-x-3">
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
