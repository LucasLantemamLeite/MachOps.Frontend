<template>
  <label v-if="textLabel && id" :for="id">{{ textLabel }}</label>
  <input :id="id" :name="name" :type="type" :placeholder="placeHolder" />
</template>

<script setup>
defineProps({
  id: String,
  name: String,
  textLabel: String,
  placeHolder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  initialValue: {
    type: String,
    default: "",
  },
});
</script>
