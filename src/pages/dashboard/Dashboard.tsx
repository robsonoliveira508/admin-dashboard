import Card from "../../components/ui/Card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-sm text-slate-500">Visão geral do sistema</p>
      </div>

      {/* Cards de métricas */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Leads (Hoje)" value="12" hint="+3 vs ontem" />
        <Card title="Qualificados" value="5" hint="taxa 41%" />
        <Card title="Tarefas pendentes" value="8" hint="2 urgentes" />
        <Card title="Conversões" value="2" hint="últimas 24h" />
      </div>

      {/* Seção extra */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <h3 className="font-semibold">Atividade recente</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Lead “Maria” criado</li>
            <li>• Lead “João” movido para Qualified</li>
            <li>• Tarefa “Enviar proposta” marcada como feita</li>
          </ul>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <h3 className="font-semibold">Próximos passos</h3>
          <p className="mt-3 text-sm text-slate-600">
            Depois vamos criar Leads e o “score” (Hot/Warm/Cold) com filtros e persistência.
          </p>
        </div>
      </div>
    </div>
  );
}
