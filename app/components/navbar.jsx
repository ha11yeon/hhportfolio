// @flow strict
"use client";

import { useState } from "react";
import Link from "next/link";
import React from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            HAYEON
          </Link>
        </div>

        <div className="md:hidden flex items-center absolute right-0 top-0 m-6">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 
        md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">

          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILL</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/certificate"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CERTIFICATE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PRIZE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/project"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECT</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">VOLUNTEER</div></Link>
          </li>
        </ul>
      </div>

      {/* 토글 버튼이 활성화되면 보여질 메뉴 박스 */}
      {/* Menu items for small screens */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-4 top-16 mt-2 w-auto bg-gray-800 z-50 md:hidden`}
      >
        <ul className="flex flex-col items-start text-sm">
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILL
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/certificate"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
              CERTIFICATE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/blog"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PRIZE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/blog"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/project"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                VOLUNTEER
              </div>
            </Link>
          </li>
        </ul>
      </div>


    </nav>
  );
};

export default Navbar;