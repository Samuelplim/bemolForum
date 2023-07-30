import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home.page";
import { TopicPage } from "../pages/topic.page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/"  element={<HomePage />} />
      <Route path="/topics/:id" element={<TopicPage />} />
    </Routes>
  );
}
