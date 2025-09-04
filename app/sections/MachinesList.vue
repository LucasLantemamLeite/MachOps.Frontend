<template>
  <div class="machinelist__div-container">
    <div class="machinelist__div-add-card">
      <ImageComponent staticImg="AddIcon" />
    </div>

    <div v-for="machine in machines" :key="machine.id" class="machinelist__div-mach-card" :style="{ backgroundColor: getBackgroundColor(machine) }">
      <div class="machinelist__div-mach-title">
        <p>{{ machine.name }}</p>
        <hr />
      </div>

      <ImageComponent :type="MachineType" :imgKey="machine.type" />
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from "vue";
import ImageComponent from "~/components/ImageComponent.vue";
import { CallApiService } from "~/services/CallApiService";
import { MachineType } from "~/models/MachineType";

const machines = ref([]);

onMounted(async () => {
  try {
    const result = await CallApiService("GetAllMachines", null, 30);
    machines.value = sortMachinesByType(result.data);
    console.log(machines.value);
  } catch (err) {
    console.error(err);
  }
});

function sortMachinesByType(arr) {
  return arr.sort((a, b) => a.type - b.type);
}

function getBackgroundColor(machine) {
  switch (machine.status) {
    case 1:
      return "#4CAF50";
    case 2:
      return "#C9302C";
    case 3:
      return "#F0AD4E";
    default:
      return "#4CAF50";
  }
}
</script>

<style lang="scss">
@use "../GlobalStyle.scss" as Style;

.machinelist__div-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  padding: 2rem 1.5rem;
}

.machinelist__div-add-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  cursor: pointer;
  border-radius: Style.$default-border-radius;
  background-color: Style.$purple-light;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: 300ms ease;

  &:hover {
    background-color: Style.$gray-dark;
    transform: translateX(3px);
  }

  img {
    width: 7rem;
  }
}

.machinelist__div-mach-card {
  position: relative;
  display: flex;
  justify-content: center;
  height: 30rem;
  cursor: pointer;
  border-radius: Style.$default-border-radius;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: 300ms ease;

  &:hover {
    transform: translateX(3px);
  }

  img {
    position: absolute;
    width: 15rem;
    bottom: 7rem;
  }
}

.machinelist__div-mach-title {
  position: absolute;
  top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: Style.$font-lg * 1.4;
  }

  hr {
    width: 20rem;
    background-color: white;
    height: 0.3rem;
  }
}
</style>
