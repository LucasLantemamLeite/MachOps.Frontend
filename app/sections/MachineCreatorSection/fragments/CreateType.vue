<template>
  <div>
    <SelectComponent name="type" id="type" textLabel="Tipo: " :type="MachineTypeModel" className="machine-creator__type" />
  </div>
</template>

<script setup lang="ts">
import { MachineTypeModel } from "~/models/MachineTypeModel";
import SelectComponent from "~/components/SelectComponent.vue";
</script>

<style lang="scss">
@use "../../../styles/GlobalVariables.scss" as Var;

.machine-creator__type {
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
