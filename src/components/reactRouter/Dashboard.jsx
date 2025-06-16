import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[200px] p-3 bg-gray-500 text-white">
          <NavLink to="orders">
            {({ isActive }) => (
              <div
                className={`p-2 cursor-pointer ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`}
              >
                Orders
              </div>
            )}
          </NavLink>
          <NavLink to="revenue">
            {({ isActive }) => (
              <div
                className={`p-2 cursor-pointer ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`}
              >
                Revenue
              </div>
            )}
          </NavLink>
          <NavLink to="setting">
            {({ isActive }) => (
              <div
                className={`p-2 cursor-pointer ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`}
              >
                Setting
              </div>
            )}
          </NavLink>
        </div>
        <div className="flex-grow p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
