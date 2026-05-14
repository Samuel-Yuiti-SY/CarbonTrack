import type { LocalizedText } from "./dashboard";

export type FleetStatus = "efficient" | "attention" | "critical";

export type FleetVehicle = {
  id: string;
  plate: string;
  model: string;
  route: LocalizedText;
  km: number;
  consumption: number;
  emission: number;
  status: FleetStatus;
};

export const fleet: FleetVehicle[] = [
  {
    id: "TRK-01",
    plate: "CT-4821",
    model: "Voltra HX 420",
    route: { pt: "São Paulo -> Curitiba", en: "Sao Paulo -> Curitiba" },
    km: 1840,
    consumption: 628,
    emission: 18.6,
    status: "critical",
  },
  {
    id: "TRK-02",
    plate: "CT-1934",
    model: "Atlas Cargo 380",
    route: { pt: "Campinas -> Rio de Janeiro", en: "Campinas -> Rio de Janeiro" },
    km: 1320,
    consumption: 392,
    emission: 11.7,
    status: "attention",
  },
  {
    id: "TRK-03",
    plate: "CT-7709",
    model: "EcoLine 310",
    route: { pt: "Belo Horizonte -> Vitória", en: "Belo Horizonte -> Vitoria" },
    km: 980,
    consumption: 244,
    emission: 7.1,
    status: "efficient",
  },
  {
    id: "TRK-04",
    plate: "CT-5580",
    model: "Voltra HX 420",
    route: { pt: "Goiânia -> Brasília", en: "Goiania -> Brasilia" },
    km: 760,
    consumption: 221,
    emission: 6.8,
    status: "efficient",
  },
  {
    id: "TRK-05",
    plate: "CT-6302",
    model: "Atlas Cargo 380",
    route: { pt: "Recife -> Salvador", en: "Recife -> Salvador" },
    km: 1490,
    consumption: 505,
    emission: 15.2,
    status: "critical",
  },
  {
    id: "TRK-06",
    plate: "CT-2844",
    model: "EcoLine 310",
    route: { pt: "Porto Alegre -> Florianópolis", en: "Porto Alegre -> Florianopolis" },
    km: 640,
    consumption: 168,
    emission: 4.9,
    status: "efficient",
  },
];
