<template>
  <ClientOnly>
    <img v-if="staticImg" :src="Icons[staticImg]" :alt="staticImg" :class="className" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ClientOnly } from "#components";
import { Icons } from "~/models/Icons";

defineProps<{
  staticImg?: keyof typeof Icons;
  className?: string;
}>();
</script>
