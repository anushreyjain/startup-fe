import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromProtected } from "../apis/protected.api";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import debounce from "../functions/debounce";
import { FiHeart, FiBookmark } from "react-icons/fi";

const Card = ({
  activeTab,
  allSlangs,
  tabHandler,
  isAdmin,
  slang,
  openSlangHandler,
  handleEditSlang,
}) => {
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

  const [loadingHeart, setLoadingHeart] = useState(false);
  const [loadingBookmark, setLoadingBookmark] = useState(false);

  const handleBookmark = async () => {
    try {
      setLoadingBookmark(true);
      await Auth.currentAuthenticatedUser();
      const bookmarkPost = await getFromProtected({
        query: "bookmarkSlang",
        fields: ["_id", "title", "description", "likes", "bookmarked", "liked"],
        variables: { id },
      });
      await tabHandler(activeTab);
      setLoadingBookmark(false);
    } catch (error) {
      navigate("/login", { replace: true });
    }
  };

  const handleLike = async (id) => {
    try {
      setLoadingHeart(true);
      const authUser = await Auth.currentAuthenticatedUser();
      const likedPost = await getFromProtected({
        query: "likeSlang",
        fields: ["_id", "title", "description", "likes", "bookmarked", "liked"],
        variables: { id },
      });
      await tabHandler(activeTab);
      setLoadingHeart(false);
    } catch (error) {
      console.log(error);
      navigate("/login", { replace: true });
    }
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = async (id) => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      console.log(authUser);
      const deletedPost = await getFromProtected({
        query: "deleteSlang",
        fields: ["_id"],
        variables: { id },
      });
      await tabHandler(activeTab);
    } catch (error) {
      console.log(error);
      navigate("/login", { replace: true });
    }
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
            onClick={() => {
              activeTab === "submission"
                ? handleEditSlang(slang)
                : openSlangHandler();
            }}
          >
            {title}
          </Text>
          {activeTab !== "submission" && (
            <>
              <FiBookmark
                className={`bookmark ${
                  loadingBookmark ? "bookmark-animate" : ""
                } ${
                  bookmarked ? "bookmark-filled" : "lg:hidden group-hover:block"
                }   flex-shrink-0`}
                onClick={handleBookmark}
              />
            </>
          )}
        </div>
        <div
          ref={myRef}
          className="cursor-pointer"
          onClick={() => {
            activeTab === "submission" ? handleEditSlang() : openSlangHandler();
          }}
        >
          <Text
            className={`text-secondary-800 text-sm max-w-[${width}] three-line-clamp flex-grow md:text-base`}
          >
            {description}
          </Text>
        </div>
      </div>
      <div className="flex mt-3 justify-between items-center w-full  h-6">
        {activeTab !== "submission" && (
          <div
            className="flex-shrink-0 flex space-x-1 items-center cursor-pointer"
            onClick={() => handleLike(id)}
          >
            <FiHeart
              className={`heart ${loadingHeart ? "heart-animate" : ""} ${
                liked ? "heart-filled" : ""
              }`}
            />
            <Text variant="" className={"text-sm"} fontWeight="font-medium">
              {likes}
            </Text>
          </div>
        )}
        <div className="flex space-x-3 items-center ">
          {isAdmin && (
            <>
              {activeTab !== "submission" && (
                <IcomoonIcon
                  icon={"pencil-square"}
                  size="20"
                  className="lg:hidden group-hover:block cursor-pointer"
                  onClick={() => handleEdit(id)}
                />
              )}
              <IcomoonIcon
                icon={"trash"}
                size="20"
                color={"red"}
                className="lg:hidden group-hover:block cursor-pointer"
                onClick={() => handleDelete(id)}
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
