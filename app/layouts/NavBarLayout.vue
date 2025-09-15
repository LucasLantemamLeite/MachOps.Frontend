<template>
  <nav class="navbar">
    <ImageComponent staticImg="AppLogoIcon" />

    <div class="navbar__search">
      <div class="navbar__icon-wrapper">
        <ImageComponent staticImg="SearchIcon" />
      </div>
      <InputComponent placeHolder="Buscar..." :value="filter" :onChange="setFilter" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
import InputComponent from "~/components/InputComponent.vue";

defineProps<{ filter?: string; setFilter?: (search: string) => void }>();
</script>

<style lang="scss">
@use "../styles/GlobalMixins.scss" as Mix;
@use "../styles/GlobalVariables.scss" as Var;

.navbar {
  @include Mix.div-field-base($display: grid);
  @include Mix.align-field-base($justify: center, $align: center);
  @include Mix.position-field-base($position: sticky, $top: 0);
  @include Mix.spacing-field-base($padding: 1.5rem 1.2rem);
  @include Mix.colors-field-base($background: Var.$purple-primary);
  grid-template-columns: 0.1fr 1fr 0.1fr;
  box-shadow: 0rem 0.2rem 0.6rem rgba(0, 0, 0, 0.418);
  z-index: 1;

  & img {
    @include Mix.size-field-base($width: 20rem);
  }

  &__search {
    @include Mix.div-field-base($display: flex);
    @include Mix.align-field-base($align: center);
    @include Mix.position-field-base($position: relative);
    justify-self: center;

    & input {
      @include Mix.size-field-base($width: 50rem, $height: 100%);
      @include Mix.box-frame-field-base();
      @include Mix.spacing-field-base($padding: 0.8rem 4.7rem);
      @include Mix.font-field-base($size: Var.$font-xl);
      @include Mix.box-frame-field-base($radius: Var.$default-border-radius);
      @include Mix.colors-field-base($background-selection: Var.$purple-primary, $color-selection: white);
      box-shadow: 0.4rem 0.3rem 0.2rem rgba(0, 0, 0, 0.329);
    }
  }

  &__icon-wrapper {
    @include Mix.div-field-base($display: flex);
    @include Mix.align-field-base($justify: center, $align: center);
    @include Mix.size-field-base($height: 85%);
    @include Mix.position-field-base($position: absolute, $left: 0.5rem, $top: 50%);
    transform: translateY(-50%);
    padding-right: 0.5rem;
    border-right: 1px solid rgba(53, 52, 52, 0.644);
    pointer-events: none;
    user-select: none;

    & img {
      @include Mix.size-field-base($width: 3.2rem);
    }
  }
}
</style>
