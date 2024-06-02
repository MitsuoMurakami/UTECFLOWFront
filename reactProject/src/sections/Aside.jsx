import { NavLink, useLocation } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaQuestion, FaTags } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Aside = () => {
  const location = useLocation();
  return (
    <aside className="h-screen w-1/5 bg-cach-l1 px-5 py-8 shadow-xl">
      <div className="relative h-full w-full">
        <div className="mb-7 flex flex-col justify-start space-y-5 text-lg">
          <div className="text-xl font-bold bg-cach-l2 text-white rounded-md py-2 px-4 text-center mb-6">
            Utec Flow
          </div>
          <NavLink
            to="/dashboard/home"
            className={`flex items-center gap-3 p-1 ${
              location.pathname.includes("home")
                ? "font-bold text-cach-l2"
                : "font-bold text-gray-700"
            }`}
          >
            <BiHomeAlt2 />
            Inicio
          </NavLink>
          <NavLink
            to="/dashboard/question"
            className={`flex items-center gap-3 p-1 ${
              location.pathname.includes("question")
                ? "font-bold text-cach-l2"
                : "font-bold text-gray-700"
            }`}
          >
        <FaRegComment />
          Preguntas
          </NavLink>
          <NavLink
            to="/dashboard/doubts"
            className={`flex items-center gap-3 p-1 ${
                location.pathname.includes("doubts")
                ? "font-bold text-cach-l2"
                : "font-bold text-gray-700"
            }`}
          >

            <FaQuestion />
            Mis dudas
          </NavLink>
          <NavLink
            to="/dashboard/tags"
            className={`flex items-center gap-3 p-1 ${
              location.pathname.includes("tags")
                ? "font-bold text-cach-l2"
                : "font-bold text-gray-700"
            }`}
          >
            <FaTags />
            Tags
          </NavLink>
          <NavLink
            to="/dashboard/logout"
            className="flex items-center gap-3 p-1 font-bold text-gray-700"
          >
            <CiLogout />
            Cerrar sesión
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
