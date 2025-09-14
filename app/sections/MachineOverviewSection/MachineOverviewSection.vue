<template>
  <div class="machine-overview__container">
    <div
      @click="
        () => {
          isMachineCreaterOpen = true;
          selectedMachine = null;
        }
      "
      class="machine-overview__add-card"
    >
      <ImageComponent staticImg="AddIcon" />
    </div>

    <ViewCard :filter="filter" @selectMachine="handleSelectMachine" />

    <MachineCreatorSection :setIsOpen="(v) => (isMachineCreaterOpen = v)" v-if="isMachineCreaterOpen" :machine="selectedMachine" />
  </div>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
import MachineCreatorSection from "../MachineCreatorSection/MachineCreatorSection.vue";
import ViewCard from "./fragments/ViewCard.vue";
import "./MachineOverViewStyle.scss";
import type { Machine } from "~/models/MachineModel";

const isMachineCreaterOpen = ref(false);

const selectedMachine = ref<Machine | null>(null);

function handleSelectMachine(machine: Machine) {
  selectedMachine.value = machine;
  isMachineCreaterOpen.value = true;
}

defineProps<{ filter?: string }>();
</script>
