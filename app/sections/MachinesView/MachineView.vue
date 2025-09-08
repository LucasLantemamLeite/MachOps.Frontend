<template>
  <div class="machineview__div-container">
    <div @click="isOpenCreate = true" class="machineview__div-add-card">
      <ImageComponent staticImg="AddIcon" />
    </div>

    <MachineCard />

    <CreateMachine :setIsOpen="(v) => (isOpenCreate = v)" v-if="isOpenCreate" />
  </div>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
import MachineCard from "./components/MachineCard.vue";
import CreateMachine from "../CreateMachine/CreateMachine.vue";

const isOpenCreate = ref(false);
</script>

<style lang="scss">
@use "../../GlobalStyle.scss" as Style;

.machineview__div-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 2rem 1.5rem;
}

.machineview__div-add-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  cursor: pointer;
  border-radius: Style.$default-border-radius;
  background-color: Style.$purple-light;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: 300ms ease;

  &:hover {
    background-color: Style.$gray-dark;
    transform: translateX(3px);
  }

  img {
    width: 12rem;
  }
}
</style>
