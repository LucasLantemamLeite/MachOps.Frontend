<template>
  <NavBarSection :filter="filter" :setFilter="setFilter" />
  <NotificationProvider>
    <LoadingProvider>
      <MachineOverviewSection :filter="filter" />
    </LoadingProvider>
  </NotificationProvider>
</template>

<script setup lang="ts">
import NavBarSection from "~/layouts/NavBarLayout.vue";
import MachineOverviewSection from "~/sections/MachineOverviewSection/MachineOverviewSection.vue";
import LoadingProvider from "~/providers/LoadingProvider.vue";
import NotificationProvider from "~/providers/NotificationProvider.vue";

const filter = ref("");

function setFilter(search: string) {
  filter.value = search;
}
</script>
