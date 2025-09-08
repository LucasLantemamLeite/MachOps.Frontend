<template>
  <NavBar />
  <NotificationProvider>
    <LoadingProvider>
      <MachineView />
    </LoadingProvider>
  </NotificationProvider>
</template>

<script setup lang="js">
import NavBar from "~/Sections/NavBar/NavBar.vue";
import MachineView from "~/Sections/MachinesView/MachineView.vue";
import LoadingProvider from "~/Provider/LoadingProvider/LoadingProvider.vue";
import NotificationProvider from "~/Provider/NotificationProvider/NotificationProvider.vue";
</script>
