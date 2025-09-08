<template>
  <div>
    <p>{{ machineName }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ machineName: string }>();
</script>

<style lang="scss" scoped>
@use "../../../GlobalStyle.scss" as Style;

div {
  padding: 1rem;
  border: 3px solid;
  border-radius: Style.$default-border-radius;
  box-shadow: 0.2rem 0.3rem 0.6rem rgba(0, 0, 0, 0.466);

  & p {
    font-size: Style.$font-2xl;
  }
}
</style>
