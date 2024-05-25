import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="hidden w-full md:block md:w-auto">
        <ul className="flex flex-col font-normal p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row ">
          <li className="">
            <Link
              to="/"
              className="text-base font-medium text-black bg-pink-200 p-2 rounded"
            >
              Maison
            </Link>
          </li>
          <li>
            <Link
              to="/test"
              className="text-base text-black font-medium active:bg-pink-200 active:rounded active:p-2"
            >
              Test
            </Link>
          </li>
          <li>
            <Link to="/personalitytypes">Types de personnalité</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
