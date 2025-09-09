<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { NuxtPage } from "#components";
</script>

<style lang="scss">
@use "./styles/GlobalVariables.scss" as Var;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  position: relative;
  background-color: #ccc4c4;
  font-size: Var.$font-2xl;
  font-weight: bold;
  color: white;
  line-height: 1.4;
  font-family: "Roboto", "Montserrat", sans-serif;
}
</style>
