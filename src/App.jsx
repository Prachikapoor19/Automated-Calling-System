import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Dialer from "./pages/Dialer";
import Costing from "./pages/Costing";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route path="dialer" element={<Dialer />} />

          <Route path="costing" element={<Costing />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;