<template>
  <div class="machinesview__div-container">
    <div class="machinesview__div-add-card">
      <ImageComponent staticImg="AddIcon" />
    </div>

    <MachinesList />
  </div>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
import MachinesList from "./components/MachinesList.vue";
import "./MachinesViewStyle.scss";
</script>
