<template>
  <ClientOnly>
    <img v-if="staticImg" :src="Icons[staticImg]" :alt="staticImg" :class="className" />

    <img v-if="foundObj" :src="Icons[foundObj.icon]" :alt="foundObj" />
  </ClientOnly>
</template>

<script setup>
import { ClientOnly } from "#components";
import { Icons } from "~/models/Icons";

const props = defineProps({
  staticImg: String,
  className: String,
  type: {
    type: Object,
    default: null,
  },
  imgKey: Number,
});

const foundObj = (() => {
  if (!props.type || !props.imgKey) return null;
  return Object.values(props.type).find((v) => v.value === props.imgKey) ?? null;
})();
</script>
