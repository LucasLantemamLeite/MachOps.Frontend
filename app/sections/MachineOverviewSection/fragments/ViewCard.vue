<template>
  <div v-if="machines" v-for="machine in filteredMachines" :key="machine.id!" class="machine-card" @click="emit('selectMachine', machine)">
    <ViewTitle :machineName="machine.name" />

    <ViewType class="machine-card__image" :type="MachineTypeModel" :imgKey="machine.type" />

    <ViewStatus :status="machine.status" />
  </div>
</template>

<script setup lang="ts">
import { MachineTypeModel } from "~/models/MachineTypeModel";
import type { Machine } from "~/models/MachineModel";
import { getAllMachines } from "../Script";
import ViewType from "~/components/ImageComponent.vue";
import ViewStatus from "~/components/StatusComponent.vue";
import ViewTitle from "../../../components/NameComponent.vue";

const props = defineProps<{ filter?: string }>();

const machines = ref<Machine[]>([]);

const loading = inject<{ setIsLoading: (v: boolean) => void }>("loading");
const notification = inject<{ setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void }>("notification");

onMounted(async () => {
  const result = await getAllMachines(loading?.setIsLoading!, notification?.setNotification!);
  machines.value = result;
});

const filteredMachines = computed(() => {
  return machines.value.filter((m) => m.name.toLowerCase().includes(props.filter?.toLowerCase() ?? ""));
});

const emit = defineEmits<{
  (e: "selectMachine", machine: Machine): void;
}>();
</script>

<style lang="scss">
@use "../../../styles/GlobalMixins.scss" as Mix;
@use "../../../styles/GlobalVariables.scss" as Var;

.machine-card {
  @include Mix.div-field-base($display: flex, $direction: column, $gap: 1rem);
  @include Mix.align-field-base($align: center);
  @include Mix.spacing-field-base($padding: 1rem);
  @include Mix.size-field-base($height: 26rem);
  @include Mix.box-frame-field-base($radius: Var.$default-border-radius);
  @include Mix.colors-field-base($background: Var.$purple-primary, $background-hover: Var.$purple-dark);
  cursor: pointer;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: 300ms ease;

  &:hover {
    transform: translateX(3px);
  }

  &__image {
    @include Mix.size-field-base($width: 12rem);
  }
}
</style>
