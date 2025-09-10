<template>
  <label v-if="textLabel && id" :for="id">{{ textLabel }}</label>
  <textarea :class="className" :id="id" :name="name" :type="type" :placeHolder="placeHolder" :maxlength="maxLenght" :autocomplete="autoComplete" />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string;
    name?: string;
    type?: string;
    textLabel?: string;
    placeHolder?: string;
    className?: string;
    maxLenght?: number;
    autoComplete?: "on" | "off";
  }>(),
  {
    type: "text",
    placeHolder: "",
    value: "",
    autoComplete: "off",
  }
);
</script>
