import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home.page";
import { TopicPage } from "../pages/topic.page";
import { PlatesPage } from "../pages/PlatesPage";
import { OrderedPage } from "../pages/OrderedPage";
import { FavoritesPage } from "../pages/FavoritesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/topics/:id" element={<TopicPage />} />
      <Route path="/plates" element={<PlatesPage />} />
      <Route path="/ordered" element={<OrderedPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}
