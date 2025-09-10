<template>
  <div v-if="machines" v-for="machine in machines" :key="machine.id" class="machine-card">
    <ViewTitle :machineName="machine.name" />

    <ViewType class="machine-card__image" :type="MachineTypeModel" :imgKey="machine.type" />

    <ViewStatus :status="machine.status" />
  </div>
</template>

<script setup lang="ts">
import { MachineTypeModel } from "~/models/MachineTypeModel";
import type { Machine } from "~/models/MachineModel";
import ViewType from "~/components/ImageComponent.vue";
import { GetAllMachines } from "../Script";
import ViewStatus from "~/components/StatusComponent.vue";
import ViewTitle from "../../../components/NameComponent.vue";

const loading = inject<{ setIsLoading: (v: boolean) => void }>("loading");
const notification = inject<{ setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void }>("notification");

const machines = ref<Machine[]>([]);

onMounted(async () => {
  const result = await GetAllMachines(loading?.setIsLoading!, notification?.setNotification!);
  machines.value = result;
});
</script>

<style lang="scss">
@use "../../../styles/GlobalVariables.scss" as Var;

.machine-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  height: 30rem;
  cursor: pointer;
  border-radius: Var.$default-border-radius;
  background-color: Var.$purple-primary;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: 300ms ease;

  &:hover {
    transform: translateX(3px);
    background-color: Var.$purple-dark;
  }

  &__image {
    width: 15rem;
  }
}
</style>
