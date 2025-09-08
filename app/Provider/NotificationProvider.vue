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
@use "../styles/GlobalStyle.scss" as Style;

.notifcation__card {
  position: fixed;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 1rem;
  right: 1rem;
  gap: 2rem;
  padding: 2rem;
  z-index: 2;
  border-radius: Style.$default-border-radius;
  width: 100%;
  pointer-events: none;
  max-width: 30rem;
  background-color: Style.$gray-dark;
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
