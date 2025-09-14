<template>
  <div v-if="notification?.message" :class="['notifcation__card', isHidding ? 'hide' : 'visible']">
    <ImageComponent :staticImg="handlerIconByType(notification.type)" />
    {{ notification.message }}
  </div>

  <slot></slot>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";

const notification = ref<{ message: string; type: "success" | "error" | "warning" | "info"; duration?: number } | null>(null);
const isHidding = ref(false);

let hideTimeout: number | undefined;
let clearNotificationTimeout: number | undefined;

function setNotification(message: string, type: "success" | "error" | "warning" | "info", duration: number = 5) {
  if (hideTimeout) clearTimeout(hideTimeout);
  if (clearNotificationTimeout) clearTimeout(clearNotificationTimeout);

  isHidding.value = false;
  notification.value = { message, type, duration };

  hideTimeout = setTimeout(() => {
    isHidding.value = true;
  }, (duration - 1) * 1000);

  clearNotificationTimeout = setTimeout(() => {
    notification.value = null;
    isHidding.value = false;
  }, duration * 1000);
}

function handlerIconByType(type: string) {
  switch (type) {
    case "error":
      return "CancelIcon";
    case "warning":
      return "WarningIcon";
    case "info":
      return "InfoIcon";
    default:
      return "ConfirmIcon";
  }
}

provide("notification", {
  setNotification,
});
</script>

<style lang="scss">
@use "../styles/GlobalMixins.scss" as Mix;
@use "../styles/GlobalVariables.scss" as Var;

.notifcation__card {
  @include Mix.div-field-base($display: flex, $direction: column, $gap: 2rem);
  @include Mix.position-field-base($position: fixed, $bottom: 1rem, $right: 1rem);
  @include Mix.align-field-base($justify: center, $align: center);
  @include Mix.spacing-field-base($padding: 2rem);
  @include Mix.box-frame-field-base($radius: Var.$default-border-radius);
  @include Mix.size-field-base($width: 100%);
  @include Mix.colors-field-base($background: Var.$gray-dark);
  text-align: center;
  z-index: 2;
  pointer-events: none;
  max-width: 30rem;
  transform: translateX(20px);
  transition: transform 200ms ease, opacity 0.3s ease;
  opacity: 1;

  & img {
    width: 10rem;
  }

  &.visible {
    opacity: 1;
    transform: translateX(0px);
  }

  &.hide {
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>
