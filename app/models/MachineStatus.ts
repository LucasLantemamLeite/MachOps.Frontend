import type { Icons } from "./Icons";

export const MachineStatus: Record<string, { label: string; icon: keyof typeof Icons; value: number }> = {
  Online: { label: "Operante", icon: "OnlineFlagIcon", value: 1 },
  Offline: { label: "Inoperante", icon: "OfflineFlagIcon", value: 2 },
  Maintenance: { label: "Manutenção", icon: "MaintenanceFlagIcon", value: 3 },
};
