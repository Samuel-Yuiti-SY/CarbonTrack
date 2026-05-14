import type { LocalizedText } from "./dashboard";

export const reportPeriods = [
  { id: "q2", label: { pt: "2o trimestre de 2026", en: "Q2 2026" } },
  { id: "last30", label: { pt: "Últimos 30 dias", en: "Last 30 days" } },
  { id: "year", label: { pt: "Ano atual", en: "Current year" } },
];

export const executiveSummary = {
  total: 1032,
  reduction: 16.2,
  mainSource: { pt: "Diesel da frota pesada", en: "Heavy fleet diesel" },
  recommendation: {
    pt: "Priorizar manutenção preventiva e replanejamento das rotas Sul e Sudeste.",
    en: "Prioritize preventive maintenance and replanning for South and Southeast routes.",
  },
};

export type ReportRow = {
  id: string;
  category: LocalizedText;
  current: string;
  variation: string;
  action: LocalizedText;
};

export const reportRows: ReportRow[] = [
  {
    id: "fleet",
    category: { pt: "Frota", en: "Fleet" },
    current: "611 tCO2e",
    variation: "-9.4%",
    action: { pt: "Otimizar rotas críticas", en: "Optimize critical routes" },
  },
  {
    id: "energy",
    category: { pt: "Energia", en: "Energy" },
    current: "251 tCO2e",
    variation: "-18.1%",
    action: { pt: "Ampliar contrato renovável", en: "Expand renewable contract" },
  },
  {
    id: "operations",
    category: { pt: "Operações", en: "Operations" },
    current: "170 tCO2e",
    variation: "+2.8%",
    action: { pt: "Investigar consumo estacionário", en: "Review stationary consumption" },
  },
];
