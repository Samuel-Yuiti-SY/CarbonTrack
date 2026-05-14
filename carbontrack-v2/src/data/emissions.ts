import type { LocalizedText } from "./dashboard";

export type EmissionStatus = "onTrack" | "attention" | "critical";

export type EmissionRecord = {
  id: string;
  date: string;
  source: LocalizedText;
  sector: LocalizedText;
  scope: "Scope 1" | "Scope 2" | "Scope 3";
  amount: number;
  status: EmissionStatus;
};

export const emissions: EmissionRecord[] = [
  {
    id: "EM-2401",
    date: "2026-04-02",
    source: { pt: "Diesel frota pesada", en: "Heavy fleet diesel" },
    sector: { pt: "Logística", en: "Logistics" },
    scope: "Scope 1",
    amount: 84.2,
    status: "critical",
  },
  {
    id: "EM-2402",
    date: "2026-04-05",
    source: { pt: "Energia do CD Norte", en: "North DC electricity" },
    sector: { pt: "Energia", en: "Energy" },
    scope: "Scope 2",
    amount: 36.8,
    status: "attention",
  },
  {
    id: "EM-2403",
    date: "2026-04-09",
    source: { pt: "Transporte terceirizado", en: "Third-party transport" },
    sector: { pt: "Supply chain", en: "Supply chain" },
    scope: "Scope 3",
    amount: 28.5,
    status: "onTrack",
  },
  {
    id: "EM-2404",
    date: "2026-04-13",
    source: { pt: "Geradores auxiliares", en: "Backup generators" },
    sector: { pt: "Operações", en: "Operations" },
    scope: "Scope 1",
    amount: 19.4,
    status: "attention",
  },
  {
    id: "EM-2405",
    date: "2026-04-18",
    source: { pt: "Refrigeração industrial", en: "Industrial cooling" },
    sector: { pt: "Facilities", en: "Facilities" },
    scope: "Scope 1",
    amount: 14.7,
    status: "onTrack",
  },
  {
    id: "EM-2406",
    date: "2026-04-22",
    source: { pt: "Viagens corporativas", en: "Business travel" },
    sector: { pt: "Administrativo", en: "Administration" },
    scope: "Scope 3",
    amount: 9.9,
    status: "onTrack",
  },
  {
    id: "EM-2407",
    date: "2026-04-26",
    source: { pt: "Linha operacional B", en: "Operational line B" },
    sector: { pt: "Operações", en: "Operations" },
    scope: "Scope 1",
    amount: 51.8,
    status: "critical",
  },
  {
    id: "EM-2408",
    date: "2026-04-29",
    source: { pt: "Compra de materiais", en: "Purchased materials" },
    sector: { pt: "Supply chain", en: "Supply chain" },
    scope: "Scope 3",
    amount: 22.6,
    status: "attention",
  },
];
