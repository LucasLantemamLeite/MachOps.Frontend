<template>
  <button :class="className" @click="$emit('click')">
    <ImageComponent v-if="icon" :staticImg="icon" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import ImageComponent from "./ImageComponent.vue";
import type { IconsModel } from "~/models/IconsModel";

defineProps<{
  icon?: keyof typeof IconsModel;
  className?: string;
}>();

defineEmits<{ (e: "click"): void }>();
</script>
