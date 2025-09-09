<template>
  <div>
    <InputComponent className="createmachine__input-name" id="name" name="name" textLabel="Nome:" />
  </div>
</template>

<script setup lang="ts">
import InputComponent from "~/components/InputComponent.vue";
</script>

<style lang="scss">
@use "../../../styles/GlobalVariables.scss" as Var;

img {
  width: 20rem;
}

div {
  display: flex;
  flex-direction: column;
}

.createmachine__input-name {
  width: 35rem;
  padding: 0.9rem;
  border: none;
  font-size: 1.6rem;
  font-weight: inherit;
  font-family: inherit;
  outline: none;
  border-radius: Var.$default-border-radius;

  &::selection {
    background-color: Var.$purple-primary;
    color: white;
  }
}
</style>
