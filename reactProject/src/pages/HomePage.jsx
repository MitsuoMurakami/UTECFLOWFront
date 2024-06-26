import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Aside from "../sections/Aside";
import router from "../routes/root";
import { IoIosSearch } from "react-icons/io";
import { SearchContext } from "../contexts/SearchContext";
import Questions from '../sections/Questions';
const HomePage = () => {
  const { setSearchTerm } = useContext(SearchContext);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchTerm(event.target.value);
    }
  };

  return (
    <main className="flex">
      <Aside />
      <section className="flex flex-col h-screen w-4/5 px-8 overflow-y-auto">
        <div className="flex items-center justify-between mt-8 mb-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex items-center flex-1">
              <IoIosSearch className="absolute left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 flex-1 h-8 px-4 rounded-md border border-cach-l2 focus:outline-none"
                name="search" id="search-id"
                onKeyUp={handleKeyUp}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <Link to="/login">
              <button className="bg-cach-l2 text-white px-4 py-1 rounded-md">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-cach-l2 text-white px-4 py-1 rounded-md">
                Register
              </button>
            </Link>
          </div>
        </div>
        <Routes>
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </section>
    </main>
  );
};

export default HomePage;
