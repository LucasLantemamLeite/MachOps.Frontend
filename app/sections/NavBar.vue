<template>
  <nav>
    <ImageComponent staticImg="AppLogoIcon" />
    <div>
      <p>caixa de pesquisa</p>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
</script>

<style lang="scss">
@use "../GlobalStyle.scss" as Style;

nav {
  display: grid;
  padding: 1.5rem 1.2rem;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  background-color: Style.$purple-primary;
  justify-content: center;
  align-items: center;
  box-shadow: 0rem 0.2rem 0.6rem rgba(0, 0, 0, 0.418);

  & img {
    width: 20rem;
  }

  & div {
    display: flex;
    justify-content: center;
    align-self: center;
  }
}
</style>
