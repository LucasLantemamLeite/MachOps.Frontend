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
.loading__background {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.61);
  z-index: 100;
}

.loading__spinner {
  width: 25rem;
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
