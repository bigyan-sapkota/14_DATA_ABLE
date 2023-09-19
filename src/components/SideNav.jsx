import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { CgMenuLeft, CgViewComfortable } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineForm,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { HiOutlineCube, HiOutlineLockClosed } from "react-icons/hi2";
import { RiPagesLine, RiShutDownLine } from "react-icons/ri";
import { FiPieChart } from "react-icons/fi";
import { LiaMap } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";
import "./css/SideNav.css";

const SideNav = () => {
  const sideNavItems = [
    {
      heading: "NAVIGATION",
      list: [{ image: <AiOutlineHome />, text: "Dashboard" }],
    },
    {
      heading: "UI ELEMENT",
      list: [{ image: <HiOutlineCube />, text: "Component" }],
    },
    {
      heading: "FORMS & TABLES",
      list: [
        { image: <AiOutlineForm />, text: "Form Elements" },
        { image: <CgViewComfortable />, text: "Table" },
      ],
    },
    {
      heading: "CHARTS & MAPS",
      list: [
        { image: <FiPieChart />, text: "Charts" },
        { image: <LiaMap />, text: "Maps" },
      ],
    },
    {
      heading: "PAGES",
      list: [
        { image: <HiOutlineLockClosed />, text: "Authentication" },
        { image: <RiPagesLine />, text: "Sample Page" },
        { image: <AiOutlineQuestionCircle />, text: "Documentation" },
        { image: <FaBars />, text: "Menu Levels" },
        { image: <RiShutDownLine />, text: "Disabled Menu" },
      ],
    },
  ];

  return (
    <div
      className="sidenav"
      style={{
        boxShadow: "2px 1px 10px 2px rgba(0, 0, 0, 0.45)",
        zIndex: "999",
      }}
    >
      {/* LOGO AND MENUBAR SECTION */}
      <div className="sidenav__logo-and-menubar">
        <div className="sidenav_logo">
          <BiTrendingUp className="text-white w-9 h-9 blue-gradient p-1 rounded-lg" />
          <div className="sidenav_logo-text">Datta Able</div>
        </div>
        <CgMenuLeft className="text-[#A9B7D0] text-[24px] cursor-pointer" />
      </div>

      {/* NAV ITEMS LIST */}
      <div className="sidenav__list my-10">
        {sideNavItems.map((item, i) => (
          <div key={i} className="sidenav__list__items">
            <div className="sidenav__list__items-heading">{item.heading}</div>
            <div className="sidenav__list_items-text-image">
              {item.list.map((listItem, j) => (
                <div key={j} className="sidenav__list_items-item">
                  <div className="text-lg">{listItem.image}</div>
                  <div>{listItem.text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
