<template>
  <div class="creator-machine__preview">
    <p class="creator-machine__info">Pré-Visualização</p>

    <PreviewName :machineName="machName" />

    <ImageComponent :type="MachineTypeModel" :imgKey="machType" />

    <PreviewStatus :status="machStatus" />
  </div>
</template>

<script setup lang="ts">
import { MachineTypeModel } from "~/models/MachineTypeModel";
import PreviewName from "./PreviewName.vue";
import PreviewStatus from "./PreviewStatus.vue";

defineProps<{
  machName: string;
  machStatus: number;
  machType: number;
}>();
</script>

<style lang="scss">
@use "../../../styles/GlobalVariables.scss" as Var;

.creator-machine__preview {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
  background-color: Var.$purple-primary;
  padding: 1rem;
  border: 1px solid white;
  box-shadow: 0.2rem 0.3rem 0.6rem rgba(0, 0, 0, 0.411);
  width: 45rem;
  border-radius: Var.$default-border-radius;
}

.creator-machine__info {
  position: absolute;
  top: -2.8rem;
  font-weight: inherit;
  font-family: inherit;
  left: 0rem;
}
</style>
