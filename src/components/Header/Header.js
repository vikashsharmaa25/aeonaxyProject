import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CreationNav from "./CreationNav";
import BusinessNav from "./BusinessNav";
import ResourcesNav from "./ResourcesNav";
import { FaGripLines } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { FaWix } from "react-icons/fa";

function Header() {
  const [dropdowns, setDropdowns] = useState({
    creation: false,
    business: false,
    resources: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const [toggle, setToggle] = useState(false);

  const responsiveHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-3 px-8 main-header">
        <div className="flex justify-center items-center gap-12">
          <h1 className="font-semibold">
            <FaWix className="text-5xl" />
          </h1>
          <ul className="lg:flex hidden items-center gap-9 header font-light">
            <li
              className="flex items-center gap-1 relative cursor-pointer"
              onMouseEnter={() => toggleDropdown("creation")}
              onMouseLeave={() => toggleDropdown("creation")}
            >
              Creation
              <IoIosArrowDown />
              {dropdowns.creation && (
                <div className="dropdown-menu absolute bg-white top-8 left-0">
                  <CreationNav />
                </div>
              )}
            </li>
            <li
              className="flex items-center gap-1 relative cursor-pointer"
              onMouseEnter={() => toggleDropdown("business")}
              onMouseLeave={() => toggleDropdown("business")}
            >
              Business
              <IoIosArrowDown />
              {dropdowns.business && (
                <div className="dropdown-menu absolute bg-white top-8 left-0">
                  <BusinessNav />
                </div>
              )}
            </li>
            <li
              className="flex items-center gap-1 relative cursor-pointer"
              onMouseEnter={() => toggleDropdown("resources")}
              onMouseLeave={() => toggleDropdown("resources")}
            >
              Resources
              <IoIosArrowDown />
              {dropdowns.resources && (
                <div className="dropdown-menu absolute bg-white top-8 left-0">
                  <ResourcesNav />
                </div>
              )}
            </li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <ul className="lg:flex hidden items-center gap-5 header font-light">
            <li>Login</li>
            <button className="bg-blue-500 text-white sm:px-6 px-3 sm:py-1 rounded-full">
              Get Started
            </button>
          </ul>
        </div>

        <span className="lg:hidden flex" onClick={responsiveHandler}>
          {toggle ? <RiCloseLine /> : <FaGripLines />}{" "}
        </span>
      </div>
      {/*===== mobile device ===== */}
      {toggle && (
        <div className="absolute top-15 bg-white left-0 right-0 dropdown-menu">
          <ul className="flex flex-col items-center gap-9 header font-light">
            <li
              className="flex items-center gap-1 relative cursor-pointer"
              onMouseEnter={() => toggleDropdown("creation")}
              onMouseLeave={() => toggleDropdown("creation")}
            >
              Creation
              <IoIosArrowDown />
              {dropdowns.creation && (
                <div className="dropdown-menu">
                  <CreationNav />
                </div>
              )}
            </li>
            <li
              className="flex items-center gap-1 relative cursor-pointer"
              onMouseEnter={() => toggleDropdown("business")}
              onMouseLeave={() => toggleDropdown("business")}
            >
              Business
              <IoIosArrowDown />
              {dropdowns.business && (
                <div className="dropdown-menu">
                  <BusinessNav />
                </div>
              )}
            </li>
            <li
              className="flex items-center gap-1 relative cursor-pointer"
              onMouseEnter={() => toggleDropdown("resources")}
              onMouseLeave={() => toggleDropdown("resources")}
            >
              Resources
              <IoIosArrowDown />
              {dropdowns.resources && (
                <div className="dropdown-menu">
                  <ResourcesNav />
                </div>
              )}
            </li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
          <div>
            <ul className="flex flex-col mb-10 items-center gap-5 header font-light">
              <li>Login</li>
              <button className="bg-blue-500 text-white sm:px-6 px-3 sm:py-1 rounded-full">
                Get Started
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
