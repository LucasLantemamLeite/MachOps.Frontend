<template>
  <div>
    <InputComponent className="createmachine__input-name" id="name" name="name" textLabel="Nome:" />
  </div>
</template>

<script setup lang="ts">
import InputComponent from "~/components/InputComponent.vue";
</script>

<style lang="scss">
@use "../../../GlobalStyle.scss" as Style;

img {
  width: 20rem;
}

div {
  display: flex;
  flex-direction: column;
}

.createmachine__input-name {
  width: 35rem;
  padding: 0.7rem;
  border: none;
  outline: none;
  border-radius: Style.$default-border-radius;
}
</style>
