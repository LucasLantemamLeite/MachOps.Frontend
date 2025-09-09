<template>
  <label v-if="props.textLabel" :for="id">{{ props.textLabel }}</label>

  <select v-if="props.type" :id="id" :name="name" :class="className">
    <option v-for="obj in Object.values(props.type)" :key="obj.value">
      {{ obj.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { IconsModel } from "~/models/IconsModel";

type typeObject = Record<string, { label: string; icon?: keyof typeof IconsModel; value: number }>;

const props = defineProps<{
  type: typeObject;
  name?: string;
  id?: string;
  textLabel?: string;
  className?: string;
}>();
</script>
