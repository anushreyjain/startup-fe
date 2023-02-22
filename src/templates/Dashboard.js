import React, { useEffect, useRef, useState } from "react";
import debounce from "../functions/debounce";
import CardsLayout from "../organism/CardsLayout";
import Header from "../organism/Header";
import { Triangle } from "react-loader-spinner";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("everything");

  const tabs = {
    home: [
      {
        id: 1,
        title: "Everything",
        value: "everything",
      },
      {
        id: 2,
        title: "Trending",
        value: "Trending",
      },
    ],
    user: [
      {
        id: 1,
        title: "My Creativity",
        value: "my-creativity",
      },
      {
        id: 2,
        title: "Saved",
        value: "saved",
      },
      {
        id: 3,
        title: "Profile",
        value: "profile",
      },
    ],
    admin: [
      {
        id: 1,
        title: "Everything",
        value: "everything",
      },
      {
        id: 2,
        title: "Trending",
        value: "Trending",
      },
      {
        id: 3,
        title: "My Creativity",
        value: "my-creativity",
      },
      {
        id: 4,
        title: "Saved",
        value: "saved",
      },
      {
        id: 5,
        title: "Profile",
        value: "profile",
      },
    ],
  };

  const tabHandler = (value) => {
    setActiveTab(value);
  };

  const slangOfTheDay = {
    title:
      "qSUQH NDAWIDJWAOID AWN DAWIDWAN DNAW  nfise nf dj isedj ise jies jfois jfioesjfiojo",
  };

  const slangDetails = [
    {
      id: 1,
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: null,
      likeCount: "123",
    },
    {
      id: 2,
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat,Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "pending",
      likeCount: "123",
    },
    {
      id: 3,
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "approved",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "approved",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
  ];

  //get dynamic header height
  const headerRef = useRef();
  const [height, setHeight] = useState(0);
  const debounceGetClientHeight = debounce(function getClientHeight() {
    const height = headerRef.current?.clientHeight;
    setHeight(height.toString());
  }, 1000);

  useEffect(() => {
    setHeight(headerRef.current?.clientHeight.toString());
    window.addEventListener("resize", debounceGetClientHeight);
  }, []);

  return (
    <div>
      <Header
        tabs={tabs}
        tabHandler={tabHandler}
        activeTab={activeTab}
        slangOfTheDay={slangOfTheDay}
        headerRef={headerRef}
      />

      {height ? (
        <CardsLayout height={height} slangDetails={slangDetails} />
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <Triangle
            height="80"
            width="80"
            color="#AC916B"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
