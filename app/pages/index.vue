<template>
  <NavBar />
  <NotificationProvider>
    <LoadingProvider>
      <MachinesView />
    </LoadingProvider>
  </NotificationProvider>
</template>

<script setup lang="js">
import NavBar from "~/Sections/NavBar/NavBar.vue";
import MachinesView from "~/Sections/MachinesView/MachinesView.vue";
import LoadingProvider from "~/Provider/LoadingProvider/LoadingProvider.vue";
import NotificationProvider from "~/Provider/NotificationProvider/NotificationProvider.vue";
</script>

<style></style>
