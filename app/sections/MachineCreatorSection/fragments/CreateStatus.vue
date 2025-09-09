<template>
  <div>
    <SelectComponent name="status" id="status" textLabel="Status: " :type="MachineStatusModel" className="machine-creator__status" />
  </div>
</template>

<script setup lang="ts">
import { MachineStatusModel } from "~/models/MachineStatusModel";
import SelectComponent from "~/components/SelectComponent.vue";
</script>

<style lang="scss">
@use "../../../styles//GlobalVariables.scss" as Var;

.machine-creator__status {
  width: 35rem;
  padding: 0.9rem;
  border: none;
  font-size: 1.6rem;
  font-weight: inherit;
  font-family: inherit;
  outline: none;
  border-radius: Var.$default-border-radius;
}
</style>
