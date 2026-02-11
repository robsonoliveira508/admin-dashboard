export default function Topbar({ title = "Dashboard" }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-xs text-slate-500">Visão geral do sistema</p>
      </div>

      <div className="flex items-center gap-3">
        <input
          className="w-64 rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
          placeholder="Buscar..."
        />
        <div className="h-9 w-9 rounded-full bg-slate-200" title="Perfil" />
      </div>
    </header>
  );
}
