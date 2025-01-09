import React, { useState } from "react";
import assets from "../../assets/assets";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [dropdown, setdropdown] = useState(false);
  const [mobNav, setmobNav] = useState(false);
  
  return (
    <div className="bg-[#303946] ">
      <div className="max-w-[1300px] justify-center gap-4 lg:justify-around mx-auto flex items-center   py-3">
        {/* logo and title  */}

        <div className="flex gap-1 items-center">
          <img src={assets.logo} alt="logo" width={40} />

          <h1 className="text-white md:text-2xl lg:text-3xl">Firstbench</h1>
        </div>

        {/* desktop nav links  */}
        <nav className="hidden lg:flex gap-4 text-[#b5becb] md:text-[12px] lg:text-[14px]">
          <div className="flex gap-1 items-center">
            <NavLink to="/Firstbench-Frontend/dashboard" className="flex gap-1 ">
              <img src={assets.home} alt="logo" className="" width={20} />
              Dashboard
            </NavLink>
          </div>
          <NavLink
            to="/Firstbench-Frontend/firstguru"
            className="flex gap-1 items-center"
          >
            <img src={assets.sparkle} alt="logo" className="" width={20} />
            FirstGuru
          </NavLink>

          <NavLink
            to="/Firstbench-Frontend/townhall"
            className="flex gap-1 items-center"
          >
            <img src={assets.tower} alt="logo" className="" width={20} />
            TownHall
          </NavLink>

          <NavLink
            to="/Firstbench-Frontend/ai-evaluation"
            className="flex gap-1 items-center"
          >
            <img src={assets.bolt} alt="logo" className="" width={20} />
            AI Evaluatian
          </NavLink>

          <NavLink
            to="/Firstbench-Frontend/performance"
            className="flex gap-1 items-center"
          >
            <img src={assets.navgraph} alt="logo" className="" width={20} />
            Performance
          </NavLink>

          <NavLink
            to="/Firstbench-Frontend/mock-test"
            className="flex gap-1 items-center"
          >
            <img src={assets.papers} alt="logo" className="" width={20} />
            Mock Test
          </NavLink>
        </nav>

        {/* right elements  */}
        <div className="flex gap-4">
          <img src={assets.bell} width={20} alt="bell" />

          <div className="md:text-[12px] lg:text-[14px]">
            <div className="flex gap-1 bg-[#1d2730] p-1 items-center relative">
              <img src={assets.profile} width={15} className="rounded-sm" />
              <p className="text-white text-[14px]">Profile</p>
              <img
                src={assets.down}
                alt="downarr"
                className="hover:cursor-pointer "
                width={25}
                onClick={() => setdropdown(!dropdown)}
              />
              {dropdown && (
                <div className="absolute -bottom-16 bg-[#303946] w-full rounded-md text-white text-[14px]">
                  <ul>
                    <li className="m-1 hover:cursor-pointer">Profile</li>
                    <li className="m-1 hover:cursor-pointer">Settings</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile and tab navs  */}
        {mobNav ? (
          <div className="lg:hidden">
            <img
              src={assets.cross}
              width={32}
              className="hover:cursor-pointer"
              onClick={() => setmobNav(false)}
            />
          </div>
        ) : (
          <div className="lg:hidden">
            <img
              src={assets.hamburger}
              width={35}
              className="hover:cursor-pointer"
              onClick={() => setmobNav(true)}
            />
          </div>
        )}

        {/* side bar nav  */}
        {mobNav && (
          <div className="fixed h-full w-[160px] md:w-[200px] top-0 left-0 bg-[#303946]">
            <div className="flex gap-1 justify-center items-center m-4 ">
              <img src={assets.logo} alt="logo" width={40} />
              <h1 className="text-white md:text-2xl mx-2">Firstbench</h1>
            </div>
            <nav className="flex flex-col gap-4 text-[#b5becb] md:text-[12px] mx-4">
              <div className="flex gap-1 items-center">
                <NavLink
                  to="/Firstbench-Frontend/dashboard"
                  className="flex gap-1 "
                >
                  <img src={assets.home} alt="logo" className="" width={20} />
                  Dashboard
                </NavLink>
              </div>
              <NavLink
                to="/Firstbench-Frontend/firstguru"
                className="flex gap-1 items-center"
              >
                <img src={assets.sparkle} alt="logo" className="" width={20} />
                FirstGuru
              </NavLink>

              <NavLink
                to="/Firstbench-Frontend/townhall"
                className="flex gap-1 items-center"
              >
                <img src={assets.tower} alt="logo" className="" width={20} />
                TownHall
              </NavLink>

              <NavLink
                to="/Firstbench-Frontend/ai-evaluation"
                className="flex gap-1 items-center"
              >
                <img src={assets.bolt} alt="logo" className="" width={20} />
                AI Evaluatian
              </NavLink>

              <NavLink
                to="/Firstbench-Frontend/performance"
                className="flex gap-1 items-center"
              >
                <img src={assets.navgraph} alt="logo" className="" width={20} />
                Performance
              </NavLink>

              <NavLink
                to="/Firstbench-Frontend/mock-test"
                className="flex gap-1 items-center"
              >
                <img src={assets.papers} alt="logo" className="" width={20} />
                Mock Test
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
