<template>
  <NavBarSection />
  <NotificationProvider>
    <LoadingProvider>
      <MachineOverviewSection />
    </LoadingProvider>
  </NotificationProvider>
</template>

<script setup lang="js">
import NavBarSection from "~/layouts/NavBarLayout.vue";
import MachineOverviewSection from "~/sections/MachineOverviewSection/MachineOverviewSection.vue";
import LoadingProvider from "~/providers/LoadingProvider.vue";
import NotificationProvider from "~/providers/NotificationProvider.vue";
</script>
