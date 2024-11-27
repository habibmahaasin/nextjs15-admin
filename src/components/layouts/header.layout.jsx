import { Icon } from "@iconify/react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="navbar bg-base-100 fixed mt-2">
      <div className="flex-1">
        <label
          htmlFor="project-sidebar"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          <Icon icon="solar:hamburger-menu-broken" className="text-3xl" />
        </label>
      </div>
      <div className="flex items-center mr-2 bg-gray-200 px-1 rounded-[24px]">
        <p className="text-sm px-1 pl-2">Habib Irfan Mahaasin</p>
        <div className="dropdown dropdown-end mt-[2px]">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                width={100}
                height={100}
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[99] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
