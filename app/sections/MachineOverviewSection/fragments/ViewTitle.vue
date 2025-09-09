<template>
  <div>
    <p>{{ machineName }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ machineName: string }>();
</script>

<style lang="scss" scoped>
@use "../../../styles/GlobalVariables.scss" as Var;

div {
  padding: 1rem;
  border: 3px solid;
  border-color: white;
  border-radius: Var.$default-border-radius;
  box-shadow: 0.2rem 0.3rem 0.6rem rgba(0, 0, 0, 0.466);

  & p {
    font-size: Var.$font-2xl;
  }
}
</style>
