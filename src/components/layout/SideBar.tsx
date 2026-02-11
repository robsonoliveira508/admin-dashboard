import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkBase =
    "block rounded px-3 py-2 text-sm hover:bg-slate-800 hover:text-white";
  const linkActive = "bg-slate-800 text-white";

  return (
    <aside className="h-screen w-64 bg-slate-900 text-slate-200 p-4">
      <div className="mb-6">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
      </div>

      <nav className="space-y-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/leads"
          className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
        >
          Leads
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
        >
          Tarefas
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
        >
          Configurações
        </NavLink>
      </nav>
    </aside>
  );
}
