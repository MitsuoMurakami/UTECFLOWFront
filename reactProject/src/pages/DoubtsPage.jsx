import { Route, Routes } from "react-router-dom";
import Aside from "../sections/Aside";
import router from "../routes/root";

const DoubtsPage = () => {
  return (
    <main className="flex">
      <Aside />
      <section className="h-screen w-4/5 px-8 overflow-y-auto">
        <Routes>
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </section>
    </main>
  );
};

export default DoubtsPage;