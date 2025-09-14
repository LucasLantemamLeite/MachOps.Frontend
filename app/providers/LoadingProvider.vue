<template>
  <div v-if="isLoading" class="loading__background">
    <ImageComponent className="loading__spinner" staticImg="LoadingIcon" />
  </div>

  <slot></slot>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";

const isLoading = ref(false);

function setIsLoading(value: boolean) {
  isLoading.value = value;
}
provide("loading", {
  setIsLoading,
});
</script>

<style lang="scss">
@use "../styles/GlobalMixins.scss" as Mix;

.loading__background {
  @include Mix.div-field-base($display: flex);
  @include Mix.align-field-base($justify: center, $align: center);
  @include Mix.position-field-base($position: fixed);
  @include Mix.colors-field-base($background: rgba(0, 0, 0, 0.61));
  inset: 0;
  backdrop-filter: blur(3px);
  z-index: 3;
}

.loading__spinner {
  @include Mix.size-field-base($width: 25rem);
  animation: animation-spinner 1s linear infinite;
}

@keyframes animation-spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
