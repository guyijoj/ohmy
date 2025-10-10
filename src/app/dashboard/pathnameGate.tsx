"use client";
import { usePathname } from "next/navigation";
import React from "react";

const PathnameGate = () => {
  const pathname = usePathname();
  return (
    <div className=" text-black text-4xl font-medium ">
      {pathname === "/dashboard" ? "Welcome back, pal !!" : null}
    </div>
  );
};

export default PathnameGate;
