<template>
  <div :style="{ borderColor: getStatusColor(props.status) }">
    <p :style="{ color: getStatusColor(props.status) }" class="machinestatus__text">{{ statusFound()?.label }}</p>
  </div>
</template>

<script setup lang="ts">
import { MachineStatus } from "~/Models/MachineStatus";

const props = defineProps<{
  machineStatus: number;
  status: number;
}>();

const statusFound = () => {
  if (!props.machineStatus) return null;
  return Object.values(MachineStatus).find((v) => v.value === props.status) ?? null;
};

function getStatusColor(color: number) {
  switch (color) {
    case 1:
      return "#00FF37";

    case 2:
      return "#ff0000";

    case 3:
      return "#FFF600";

    default:
      return "#00FF37";
  }
}
</script>

<style lang="scss" scoped>
@use "../../../GlobalStyle.scss" as Style;

div {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border: 3px solid;
  border-radius: Style.$default-border-radius;
  box-shadow: 0.2rem 0.3rem 0.6rem rgba(0, 0, 0, 0.466);

  & .machinestatus__text {
    font-size: Style.$font-2xl;
  }
}
</style>
