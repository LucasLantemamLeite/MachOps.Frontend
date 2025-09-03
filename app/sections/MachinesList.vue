<template>
  <div class="machinelist__container">
    <div class="machinelist__add-card">
      <ImageComponent staticImg="AddIcon" />
    </div>

    <div v-for="machine in machines" class="machinelist__mach-card">
      <p>{{ machine.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from "axios";
import ImageComponent from "~/components/ImageComponent.vue";
import type { Machine } from "~/models/Machine";
import { CallApiService } from "~/services/CallApiService";

const machines = ref<Machine[]>([]);

onMounted(async () => {
  try {
    var result = await CallApiService("GetAllMachines", null, 30);

    machines.value = result.data;
    console.log(result.message);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log("StatusCode: " + err.response?.status);
      console.log("Resposta: " + err.response?.data.message);
    } else {
      console.log(err);
    }
    return [];
  }
});
</script>

<style lang="scss">
@use "../GlobalStyle.scss" as Style;

.machinelist__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  padding: 2rem 1.5rem;
}

.machinelist__add-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  cursor: pointer;
  border-radius: Style.$default-border-radius;
  background-color: Style.$gold-accent;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.301);
  transition: 300ms ease;

  &:hover {
    background-color: Style.$gray-dark;
    transform: translateX(3px);
  }

  & img {
    width: 7rem;
  }
}
</style>
