import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";

function App() {
  return (
      <Routes>
        {/* Rotas com layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />

          {/* Se cair em rota não existente, redireciona para dashboard */}
          <Route path="*" element={<Navigate to="/" />} />

        </Route>
      </Routes>

  );
}

export default App;
