<template>
  <div :style="{ borderColor: getStatusColor(props.status) }">
    <p :style="{ color: getStatusColor(props.status) }">{{ statusFound()?.label }}</p>
  </div>
</template>

<script setup lang="ts">
import { MachineStatusModel } from "~/models/MachineStatusModel";
import { getStatusColor } from "../Script";

const props = defineProps<{
  machineStatus: number;
  status: number;
}>();

const statusFound = () => {
  if (!props.machineStatus) return null;
  return Object.values(MachineStatusModel).find((v) => v.value === props.status) ?? null;
};
</script>

<style lang="scss" scoped>
@use "../../../styles/GlobalVariables.scss" as Var;

div {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border: 3px solid;
  border-radius: Var.$default-border-radius;
  box-shadow: 0.2rem 0.3rem 0.6rem rgba(0, 0, 0, 0.466);

  & p {
    font-size: Var.$font-2xl;
  }
}
</style>
