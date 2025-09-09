import type { IconsModel } from "./IconsModel";

export const MachineTypeModel: Record<string, { label: string; icon: keyof typeof IconsModel; value: number }> = {
  Forklift: { label: "Empilhadeira", icon: "ForkliftIcon", value: 1 },
  Loader: { label: "Carregadeira", icon: "LoaderIcon", value: 2 },
  Excavator: { label: "Excavadeira", icon: "ExcavatorIcon", value: 3 },
  Bulldozer: { label: "Trator de Esteira", icon: "BulldozerIcon", value: 4 },
  Crane: { label: "Guindaste", icon: "CraneIcon", value: 5 },
  AGV: { label: "AGV", icon: "AGVIcon", value: 6 },
  Skid: { label: "BobCat", icon: "SkidIcon", value: 7 },
};
