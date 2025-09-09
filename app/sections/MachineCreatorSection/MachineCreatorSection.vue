<template>
  <div @click="setIsOpen(false)" class="machine-creator__background">
    <div @click.stop class="machine-creator__box">
      <form class="machine-creator__form">
        <ImageComponent staticImg="ExcavatorIcon" />

        <CreateName />

        <CreateType />

        <CreateStatus />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateName from "./fragments/CreateName.vue";
import CreateStatus from "./fragments/CreateStatus.vue";
import CreateType from "./fragments/CreateType.vue";

defineProps<{
  setIsOpen: (v: boolean) => void;
}>();
</script>

<style lang="scss">
@use "../../styles/GlobalVariables.scss" as Var;

.machine-creator {
  &__background {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 0;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.692);
    z-index: 20;
  }

  &__box {
    display: flex;
    align-items: center;
    padding: 3rem;
    background-color: Var.$purple-primary;
    width: 50rem;
    height: 70rem;
    border-radius: Var.$default-border-radius;
    box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.514);
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 35rem;

    label {
      font-size: 1.4rem;
    }
  }
}
</style>
