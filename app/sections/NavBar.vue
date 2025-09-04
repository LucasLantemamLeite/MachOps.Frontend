<template>
  <nav>
    <ImageComponent staticImg="AppLogoIcon" />
    <div class="navbar__div-search">
      <div class="navbar__div-icon-wrapper">
        <ImageComponent staticImg="SearchIcon" />
      </div>
      <InputComponent placeHolder="Buscar..." />
    </div>
  </nav>
</template>

<script setup lang="js">
import ImageComponent from "~/components/ImageComponent.vue";
import InputComponent from "~/components/InputComponent.vue";
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
}

.navbar__div-search {
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
    font-size: Style.$font-xl;
    font-weight: bold;
    border-radius: Style.$default-border-radius;
    box-shadow: 0.4rem 0.3rem 0.2rem rgba(0, 0, 0, 0.329);

    &::selection {
      background-color: Style.$purple-primary;
      color: white;
    }
  }
}

.navbar__div-icon-wrapper {
  position: absolute;
  left: 0.5rem;
  display: flex;
  align-items: center;
  border-right: 1px solid black;
  padding-right: 0.5rem;

  & img {
    width: 3.2rem;
    pointer-events: none;
  }
}
</style>
