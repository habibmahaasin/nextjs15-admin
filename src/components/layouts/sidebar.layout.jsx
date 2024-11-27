"use clienr";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const SIDEBAR_MENU = [
    {
      title: "Dashboard",
      icon: "si:dashboard-line",
      link: "/",
    },
    {
      title: "Form",
      icon: "fluent:form-20-regular",
      link: "/form",
    },
    {
      title: "Table",
      icon: "proicons:table",
      link: "/table",
    },
  ];

  return (
    <div className="drawer-side h-screen">
      <label
        htmlFor="project-sidebar"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu text-white text-base-content min-h-full h-full w-64 p-0 lg:p-4 lg:py-4">
        <div className="bg-primary h-full min-h-full lg:rounded-2xl flex flex-col gap-8 px-4">
          <div className="font-bold text-[24px] w-full text-center mt-8">
            Logo
          </div>
          <ul className="flex flex-col">
            {SIDEBAR_MENU.map((menu, index) => (
              <li className="flex" key={index}>
                <Link
                  href={menu.link}
                  className={`py-4 flex items-center ${
                    pathname === menu.link &&
                    "bg-black bg-opacity-10 !text-white"
                  }`}
                >
                  <Icon icon={menu.icon} className="text-[20px] -mt-1" />
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
