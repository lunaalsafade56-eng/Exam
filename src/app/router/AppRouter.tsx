import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../components/Layout/MainLayout";
import { routes } from "../../constants/routes";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Content from "../../pages/Content";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.content} element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
