<template>
  <div class="creator-machine__preview">
    <p class="creator-machine__info">Pré-Visualização</p>

    <PreviewName :machineName="machName" />

    <PreviewType :type="MachineTypeModel" :imgKey="machType" />

    <PreviewStatus :status="machStatus" />
  </div>
</template>

<script setup lang="ts">
import { MachineTypeModel } from "~/models/MachineTypeModel";
import PreviewType from "~/components/ImageComponent.vue";
import PreviewName from "~/components/NameComponent.vue";
import PreviewStatus from "~/components/StatusComponent.vue";

defineProps<{
  machName: string;
  machStatus: number;
  machType: number;
}>();
</script>

<style lang="scss">
@use "../../../styles/GlobalMixins.scss" as Mix;
@use "../../../styles/GlobalVariables.scss" as Var;

.creator-machine__preview {
  @include Mix.div-field-base($display: flex, $direction: column, $gap: 1rem);
  @include Mix.position-field-base($position: relative);
  @include Mix.align-field-base($justify: center, $align: center);
  @include Mix.colors-field-base($background: Var.$purple-primary);
  @include Mix.box-frame-field-base($radius: Var.$default-border-radius, $border: 1px solid white);
  @include Mix.spacing-field-base($padding: 1rem);
  @include Mix.size-field-base($width: 37rem);
  margin-bottom: 2rem;
  box-shadow: 0.2rem 0.3rem 0.6rem rgba(0, 0, 0, 0.411);
}

.creator-machine__info {
  @include Mix.position-field-base($position: absolute, $top: -2.8rem, $left: 0rem);
  @include Mix.font-field-base();
}
</style>
