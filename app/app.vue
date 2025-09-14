<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { NuxtPage } from "#components";
</script>

<style lang="scss">
@use "./styles/GlobalMixins.scss" as Mix;
@use "./styles/GlobalVariables.scss" as Var;

* {
  @include Mix.spacing-field-base();
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  @include Mix.position-field-base($position: relative);
  @include Mix.colors-field-base($background: #ccc4c4, $color: white);
  @include Mix.font-field-base(
    $size: Var.$font-2xl,
    $family: (
      "Roboto",
      "Montserrat",
      sans-serif,
    ),
    $weight: bold
  );
  line-height: 1.4;
}
</style>
