<template>
  <img v-if="staticImg" :src="IconsModel[staticImg]" :alt="staticImg" :class="className" />

  <img v-else-if="foundObj" :src="IconsModel[foundObj.icon]" :alt="foundObj.label" :class="className" />
</template>

<script setup lang="ts">
import { IconsModel } from "~/models/IconsModel";

type typeObject = Record<string, { label: string; icon: keyof typeof IconsModel; value: number }>;

const props = defineProps<{
  staticImg?: keyof typeof IconsModel;
  className?: string;
  type?: typeObject;
  imgKey?: number;
}>();

const foundObj = (() => {
  if (!props.type || !props.imgKey) return null;
  return Object.values(props.type).find((v) => v.value === props.imgKey) ?? null;
})();
</script>
