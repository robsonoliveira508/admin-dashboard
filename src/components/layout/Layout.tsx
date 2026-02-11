import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
