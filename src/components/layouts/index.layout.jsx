"use client";

import Header from "./header.layout";
import Sidebar from "./sidebar.layout";

const { usePathname } = require("next/navigation");

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  if (pathname === "/login") {
    return children;
  } else {
    return (
      <>
        <div className="drawer lg:drawer-open fixed z-[99]">
          <input
            id="project-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />

          <Header />
          <div className="drawer-content overflow-y-auto mt-[5.5rem] pb-4 h-[calc(100vh-6rem)]">
            <div className="border rounded-lg mx-4 p-2 min-h-full">
              {children}
            </div>
          </div>
          <Sidebar />
        </div>
      </>
    );
  }
};

export default MainLayout;
