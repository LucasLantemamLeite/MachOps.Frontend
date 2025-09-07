<template>
  <div class="machinelist__div-container">
    <div class="machinelist__div-add-card">
      <ImageComponent staticImg="AddIcon" />
    </div>

    <MachinesList />
  </div>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
import MachinesList from "./Components/MachinesList.vue";
import "./MachinesViewStyle.scss";
</script>
