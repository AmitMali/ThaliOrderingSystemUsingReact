import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      {/*<!-- Header --> */}
      <Navbar />
      <section>
        <div className="container px-6 m-auto">
          <Outlet />
        </div>
      </section>

      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}
