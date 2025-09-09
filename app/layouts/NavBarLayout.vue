<template>
  <nav class="navbar">
    <ImageComponent staticImg="AppLogoIcon" />

    <div class="navbar__search">
      <div class="navbar__icon-wrapper">
        <ImageComponent staticImg="SearchIcon" />
      </div>
      <InputComponent placeHolder="Buscar..." />
    </div>
  </nav>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
import InputComponent from "~/components/InputComponent.vue";
</script>

<style lang="scss">
@use "../styles/GlobalVariables.scss" as Var;

.navbar {
  display: grid;
  position: sticky;
  top: 0;
  padding: 1.5rem 1.2rem;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  background-color: Var.$purple-primary;
  justify-content: center;
  align-items: center;
  box-shadow: 0rem 0.2rem 0.6rem rgba(0, 0, 0, 0.418);
  z-index: 1;

  & img {
    width: 20rem;
  }

  &__search {
    position: relative;
    display: flex;
    justify-self: center;
    align-items: center;

    & input {
      width: 50rem;
      outline: none;
      border: none;
      padding: 0.8rem;
      padding-left: 4.7rem;
      font-family: inherit;
      font-size: Var.$font-xl;
      font-weight: bold;
      border-radius: Var.$default-border-radius;
      box-shadow: 0.4rem 0.3rem 0.2rem rgba(0, 0, 0, 0.329);
      height: 100%;
      box-sizing: border-box;

      &::selection {
        background-color: Var.$purple-primary;
        color: white;
      }
    }
  }

  &__icon-wrapper {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85%;
    padding-right: 0.5rem;
    border-right: 1px solid rgba(53, 52, 52, 0.644);
    pointer-events: none;

    & img {
      width: 3.2rem;
    }
  }
}
</style>
