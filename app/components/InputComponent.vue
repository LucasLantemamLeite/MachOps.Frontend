<template>
  <label v-if="textLabel && id" :for="id">{{ textLabel }}</label>
  <input :id="id" :name="name" :type="type" :placeholder="placeHolder" />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string;
    name?: string;
    textLabel?: string;
    placeHolder?: string;
    type?: string;
    initialValue?: string;
  }>(),
  {
    type: "text",
    placeHolder: "",
    initialValue: "",
  }
);
</script>
