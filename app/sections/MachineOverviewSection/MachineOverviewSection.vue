<template>
  <div class="machine-overview__container">
    <div @click="isMachineCreaterOpen = true" class="machine-overview__add-card">
      <ImageComponent staticImg="AddIcon" />
    </div>

    <ViewCard />

    <MachineCreatorSection :setIsOpen="(v) => (isMachineCreaterOpen = v)" v-if="isMachineCreaterOpen" />
  </div>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
import MachineCreatorSection from "../MachineCreatorSection/MachineCreatorSection.vue";
import ViewCard from "./fragments/ViewCard.vue";
import "./MachineOverViewStyle.scss";

const isMachineCreaterOpen = ref(false);
</script>
