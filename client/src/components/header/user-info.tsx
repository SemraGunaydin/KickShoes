import { useEffect, useState } from "react";
import useUser from "../../service/user";
import { FaSearch as Search, FaUser as User } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../service/auth";

const UserInfo = () => {
  const { logout } = useAuth();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && !e.target.closest(".user-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="flex items-center gap-6 xl:gap-10">

      {/* Search */}
      <button className="cursor-pointer md:text-xl xl:text-2xl max-md:hidden">
        <Search />
      </button>

      {/* USER MENU */}
      <div className="relative user-menu">
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <User />
        </div>

        {isOpen && user && (
          <div className="absolute top-10 -left-20 bg-white shadow-lg rounded-md z-50 flex flex-col">

            <div className="header-button font-semibold cursor-default">
              {user.firstName} {user.lastName}
            </div>

            {user.role === "admin" && (
              <Link to="/dashboard" className="header-button">
                Admin Dashboard
              </Link>
            )}

            <div
              onClick={() => logout.mutate()}
              className="header-button cursor-pointer"
            >
              Logout
            </div>
          </div>
        )}
      </div>

      {/* CART */}
      <button className="bg-my-yellow rounded-full w-6 h-6 grid place-items-center">
        0
      </button>
    </div>
  );
};

export default UserInfo;