<template>
  <div @click="setIsOpen(false)" class="createmachine__div-background">
    <div v-on:click="(e) => e.stopPropagation()" class="createmachine__div-box-create">
      <form class="createmachine__form" action="">
        <ImageComponent staticImg="ExcavatorIcon" />
        <CreateMachineName />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateMachineName from "./components/CreateMachineName.vue";

defineProps<{
  setIsOpen: (v: boolean) => void;
}>();
</script>

<style lang="scss">
@use "../../GlobalStyle.scss" as Style;

.createmachine__div-background {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  inset: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.692);
  z-index: 20;
}

.createmachine__div-box-create {
  display: flex;
  align-items: center;
  padding: 3rem;
  background-color: Style.$purple-primary;
  width: 50rem;
  height: 70rem;
  border-radius: Style.$default-border-radius;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.514);
}

.createmachine__form {
  flex-direction: column;
  width: 35rem;
  display: flex;

  align-items: center;
  gap: 1rem;

  & label {
    font-size: 1.4rem;
  }
}
</style>
