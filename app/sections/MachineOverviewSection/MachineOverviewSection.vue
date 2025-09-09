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

const isMachineCreaterOpen = ref(false);
</script>

<style lang="scss">
@use "../../styles//GlobalVariables.scss" as Var;

.machine-overview {
  &__container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 2rem 1.5rem;
  }

  &__add-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30rem;
    cursor: pointer;
    border-radius: Var.$default-border-radius;
    background-color: Var.$purple-light;
    box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
    transition: 300ms ease;

    &:hover {
      background-color: Var.$gray-dark;
      transform: translateX(3px);
    }

    img {
      width: 12rem;
    }
  }
}
</style>
