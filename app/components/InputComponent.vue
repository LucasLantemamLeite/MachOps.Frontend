<template>
  <label v-if="textLabel && id" :for="id">{{ textLabel }}</label>
  <input :class="className" :id="id" :name="name" :type="type" :placeHolder="placeHolder" :value="value ?? ''" @input="handlerChange" :maxlength="maxLenght" :autocomplete="autoComplete" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id?: string;
    name?: string;
    type?: string;
    textLabel?: string;
    placeHolder?: string;
    className?: string;
    value?: string | Date | null;
    maxLenght?: number;
    autoComplete?: "on" | "off";
    onChange?: (value: string) => void;
  }>(),
  {
    type: "text",
    placeHolder: "",
    value: "",
    autoComplete: "off",
  }
);

function handlerChange(event: Event) {
  const target = event.target as HTMLInputElement;

  props.onChange?.(target.value);
}
</script>
