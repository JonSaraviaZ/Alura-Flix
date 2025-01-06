import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./componentes/NotFound/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
