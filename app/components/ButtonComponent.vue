<template>
  <button :class="className" :type="type" @click="$emit('click')">
    <ImageComponent v-if="icon" :staticImg="icon" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import ImageComponent from "./ImageComponent.vue";
import type { IconsModel } from "~/models/IconsModel";

withDefaults(
  defineProps<{
    icon?: keyof typeof IconsModel;
    className?: string;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    type: "button",
  }
);

defineEmits<{ (e: "click"): void }>();
</script>
