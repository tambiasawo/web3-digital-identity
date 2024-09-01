"use client";
import React, { useState, useEffect } from "react";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";
import ActionButtons from "./_components/actions-buttons";

const Navbar = () => {
  const navbarClasses = `flex items-center justify-between bg-white space-x-10 border-b z-50 border-gray-200 h-14 sticky top-0 `;
  return (
    <div className={navbarClasses}>
      <div className="flex items-center justify-center">
        <Logo />
        <Menu/>
      </div>
      <ActionButtons/>
    </div>
  );
};

export default Navbar;
