import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
