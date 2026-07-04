import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SchedulerPage from "@/pages/SchedulerPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scheduler" element={<SchedulerPage />} />
      </Routes>
    </BrowserRouter>
  );
}