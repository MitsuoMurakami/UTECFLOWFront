import { Routes, Route, useLocation } from "react-router-dom";
import router from "./routes/root.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {

  const location = useLocation();

  const showMainPage = location.pathname.includes("dashboard");

  return (
    <div id="App" className="h-full w-full">
      {!showMainPage || <HomePage />}

      {showMainPage || (
        <Routes>
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            ></Route>
          ))}
        </Routes>
      )}
    </div>
  );
};

export default App;
