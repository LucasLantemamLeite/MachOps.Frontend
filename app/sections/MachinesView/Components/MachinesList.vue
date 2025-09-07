<template>
  <div v-for="machine in machines" :key="machine.id" class="machineslist__div-mach-card">
    <div class="machineslist__div-mach-title">
      <p>{{ machine.name }}</p>
      <hr />
    </div>

    <ImageComponent :type="MachineType" :imgKey="machine.machineType" />
  </div>
</template>

<script setup lang="ts">
import { MachineType } from "~/Models/MachineType";
import type { Machine } from "~/Models/Machine";
import { GetAllMachines } from "../Script";

const machines = ref<Machine[]>([]);

onMounted(async () => {
  const result = await GetAllMachines();
  machines.value = result;
});
</script>
