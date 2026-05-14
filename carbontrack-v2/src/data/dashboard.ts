import type { Locale } from "@/messages";

export type LocalizedText = Record<Locale, string>;

export const monthlyEmissions = [
  { month: { pt: "Jan", en: "Jan" }, emissions: 1320, target: 1400 },
  { month: { pt: "Fev", en: "Feb" }, emissions: 1265, target: 1360 },
  { month: { pt: "Mar", en: "Mar" }, emissions: 1198, target: 1310 },
  { month: { pt: "Abr", en: "Apr" }, emissions: 1134, target: 1260 },
  { month: { pt: "Mai", en: "May" }, emissions: 1086, target: 1210 },
  { month: { pt: "Jun", en: "Jun" }, emissions: 1032, target: 1160 },
];

export const dashboardKpis = {
  monthlyEmissions: {
    value: "1,032 tCO2e",
    detail: { pt: "-7,6% vs. mes anterior", en: "-7.6% vs. previous month" },
    trend: "-7.6%",
  },
  reduction: {
    value: "16.2%",
    detail: { pt: "Meta anual em evolucao", en: "Annual target progressing" },
    trend: "+3.1%",
  },
  quarterlyGoal: {
    value: "78%",
    detail: { pt: "112 tCO2e restantes", en: "112 tCO2e remaining" },
  },
  vehicles: {
    value: "42",
    detail: { pt: "6 veiculos em atencao", en: "6 vehicles need attention" },
  },
  cost: {
    value: 186400,
    detail: { pt: "Estimativa operacional", en: "Operational estimate" },
  },
  alerts: {
    value: "8",
    detail: { pt: "3 alertas criticos", en: "3 critical alerts" },
  },
};

export const sectorEmissions = [
  { sector: { pt: "Logística", en: "Logistics" }, emissions: 420 },
  { sector: { pt: "Operações", en: "Operations" }, emissions: 288 },
  { sector: { pt: "Energia", en: "Energy" }, emissions: 196 },
  { sector: { pt: "Facilities", en: "Facilities" }, emissions: 128 },
];

export const scopeDistribution = [
  { scope: "Scope 1", value: 58 },
  { scope: "Scope 2", value: 24 },
  { scope: "Scope 3", value: 18 },
];

export const reductionEvolution = [
  { month: { pt: "Jan", en: "Jan" }, reduction: 4.2 },
  { month: { pt: "Fev", en: "Feb" }, reduction: 6.8 },
  { month: { pt: "Mar", en: "Mar" }, reduction: 9.1 },
  { month: { pt: "Abr", en: "Apr" }, reduction: 11.4 },
  { month: { pt: "Mai", en: "May" }, reduction: 13.6 },
  { month: { pt: "Jun", en: "Jun" }, reduction: 16.2 },
];

export const topEmitters = [
  {
    name: { pt: "Rota Sudeste 04", en: "Southeast Route 04" },
    value: 82.4,
    detail: { pt: "Frota pesada", en: "Heavy fleet" },
  },
  {
    name: { pt: "Centro de distribuição Norte", en: "North distribution center" },
    value: 64.1,
    detail: { pt: "Energia e refrigeração", en: "Energy and cooling" },
  },
  {
    name: { pt: "Linha operacional B", en: "Operational line B" },
    value: 51.8,
    detail: { pt: "Combustível estacionário", en: "Stationary fuel" },
  },
];

export const recentAlerts = [
  {
    title: { pt: "Consumo acima do padrão", en: "Consumption above baseline" },
    detail: { pt: "Veículo CT-4821 na rota Sul", en: "Vehicle CT-4821 on South route" },
    tone: "rose",
  },
  {
    title: { pt: "Meta semanal em risco", en: "Weekly goal at risk" },
    detail: { pt: "Setor de logística em 91%", en: "Logistics sector at 91%" },
    tone: "amber",
  },
  {
    title: { pt: "Redução validada", en: "Reduction validated" },
    detail: { pt: "Energia renovável compensada", en: "Renewable energy accounted" },
    tone: "emerald",
  },
] as const;

export const recommendations = [
  {
    title: { pt: "Otimizar janelas de entrega", en: "Optimize delivery windows" },
    impact: { pt: "-38 tCO2e estimadas", en: "-38 estimated tCO2e" },
  },
  {
    title: { pt: "Migrar 18% da energia para fonte renovável", en: "Move 18% of energy to renewables" },
    impact: { pt: "-24 tCO2e no trimestre", en: "-24 tCO2e this quarter" },
  },
  {
    title: { pt: "Revisar manutenção preventiva de 4 caminhões", en: "Review preventive maintenance for 4 trucks" },
    impact: { pt: "-7% de consumo", en: "-7% consumption" },
  },
];

export const esgGoal = {
  progress: 78,
  title: { pt: "Meta trimestral em boa trajetória", en: "Quarterly goal trending well" },
  detail: {
    pt: "Faltam 112 tCO2e para atingir a meta acordada.",
    en: "112 tCO2e remain to reach the agreed target.",
  },
};
