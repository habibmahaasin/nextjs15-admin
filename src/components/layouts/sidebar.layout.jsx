const Sidebar = () => {
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
          <ul className="flex flex-col gap-2">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
