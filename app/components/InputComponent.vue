<template>
  <label v-if="textLabel && id" :for="id">{{ textLabel }}</label>
  <input :class="className" :id="id" :name="name" :type="type" :placeHolder="placeHolder" />
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
  }>(),
  {
    type: "text",
    placeHolder: "",
  }
);
</script>
