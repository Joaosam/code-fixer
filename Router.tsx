import { Route, Routes, BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./src/layouts/DefaultLayout";
import { GenerateCode } from "./src/Pages/GenerateCode";
import { Home } from "./src/Pages/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/generatecode" element={<GenerateCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
