<template>
  <div v-for="machine in machines" :key="machine.id" class="machineslist__div-mach-card">
    <div class="machineslist__div-mach-title">
      <p>{{ machine.name }}</p>
      <hr />
    </div>

    <ImageComponent className="machineslist__div-mach-type" :type="MachineType" :imgKey="machine.type" />

    <ImageComponent className="machinelist__div-mach-status" :type="MachineStatus" :imgKey="machine.status" />
  </div>
</template>

<script setup lang="ts">
import { MachineType } from "~/Models/MachineType";
import type { Machine } from "~/Models/Machine";
import { GetAllMachines } from "../Script";
import { MachineStatus } from "~/Models/MachineStatus";

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
  position: relative;
  display: flex;
  justify-content: center;
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

.machineslist__div-mach-title {
  position: absolute;
  top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: Style.$font-lg * 1.4;
  }

  hr {
    width: 20rem;
    background-color: white;
    height: 0.3rem;
  }
}

.machineslist__div-mach-type {
  width: 14rem;
}

.machinelist__div-mach-status {
  position: absolute;
  top: 1rem;
  left: 0.1rem;
  width: 9rem;
}
</style>
