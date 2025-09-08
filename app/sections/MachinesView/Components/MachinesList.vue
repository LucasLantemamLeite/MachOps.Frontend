<template>
  <div v-if="machines" v-for="machine in machines" :key="machine.id" class="machineslist__div-mach-card">
    <MachineTitle :machineName="machine.name" />

    <ImageComponent className="machineslist__div-mach-type" :type="MachineType" :imgKey="machine.type" />

    <MachineStatus :machineStatus="machine.status" :status="machine.status" />
  </div>
</template>

<script setup lang="ts">
import { MachineType } from "~/Models/MachineType";
import type { Machine } from "~/Models/Machine";
import { GetAllMachines } from "../Script";
import MachineTitle from "./MachineTitle.vue";
import MachineStatus from "./MachineStatus.vue";

const loading = inject<{ setIsLoading: (v: boolean) => void }>("loading");
const notification = inject<{ setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void }>("notification");

const machines = ref<Machine[]>([]);

onMounted(async () => {
  const result = await GetAllMachines(loading?.setIsLoading!, notification?.setNotification!);
  machines.value = result;
});
</script>

<style lang="scss">
@use "../../../GlobalStyle.scss" as Style;

.machineslist__div-mach-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  height: 30rem;
  cursor: pointer;
  border-radius: Style.$default-border-radius;
  background-color: Style.$purple-primary;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: 300ms ease;

  &:hover {
    transform: translateX(3px);
    background-color: Style.$purple-dark;
  }
}

.machineslist__div-mach-type {
  width: 15rem;
}
</style>
