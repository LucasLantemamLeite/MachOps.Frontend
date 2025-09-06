import type { Icons } from "./Icons";

export const MachineStatus: Record<string, { label: string; icon: keyof typeof Icons; value: number }> = {
  Online: { label: "Operante", icon: "ForkliftIcon", value: 1 },
  Offline: { label: "Inoperante", icon: "ForkliftIcon", value: 2 },
  Maintenance: { label: "Manutenção", icon: "ForkliftIcon", value: 3 },
};
