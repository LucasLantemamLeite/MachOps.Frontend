<template>
  <ClientOnly>
    <img v-if="staticImg" :src="Icons[staticImg]" :alt="staticImg" :class="className" />

    <img v-if="foundObj" :src="Icons[foundObj.icon]" :alt="foundObj.label" :class="className" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ClientOnly } from "#components";
import { Icons } from "~/Models/Icons";

type typeObject = Record<string, { label: string; icon: keyof typeof Icons; value: number }>;

const props = defineProps<{
  staticImg?: keyof typeof Icons;
  className?: string;
  type?: typeObject;
  imgKey?: number;
}>();

const foundObj = (() => {
  if (!props.type || !props.imgKey) return null;
  return Object.values(props.type).find((v) => v.value === props.imgKey) ?? null;
})();
</script>
