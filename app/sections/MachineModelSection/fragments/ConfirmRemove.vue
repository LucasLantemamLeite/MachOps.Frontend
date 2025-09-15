<template>
  <div class="confirm-remove__background">
    <div class="confirm-remove__box">
      <div class="confirm-remove__icon-text">
        <ImageComponent staticImg="InfoIcon" />
        <p>Tem certeza que deseja remover a máquina "{{ machine }}"?</p>
      </div>
      <div class="confirm-remove__button">
        <ButtonComponent className="confirm-remove__button-confirm" icon="ConfirmIcon" @click="onConfirmClick">Sim</ButtonComponent>
        <ButtonComponent class-name="confirm-remove__button-cancel" icon="CancelIcon" @click="onCancelClick">Não</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageComponent from "~/components/ImageComponent.vue";
import ButtonComponent from "~/components/ButtonComponent.vue";

const props = defineProps<{
  machine: string;
  setConfirmOpen: (value: boolean) => void;
  onConfirm: () => void;
}>();

function onConfirmClick() {
  props.onConfirm();
  props.setConfirmOpen(false);
}

function onCancelClick() {
  props.setConfirmOpen(false);
}
</script>

<style lang="scss">
@use "../../../styles/GlobalVariables.scss" as Var;
@use "../../../styles/GlobalFunctions.scss" as Fun;
@use "../../../styles/GlobalMixins.scss" as Mix;

@mixin button-base($bg-color) {
  @include Mix.div-field-base($display: flex, $gap: 2rem);
  @include Mix.align-field-base($justify: center, $align: center);
  @include Mix.size-field-base($width: 15rem);
  @include Mix.spacing-field-base($padding: 0.5rem);
  @include Mix.box-frame-field-base($radius: Var.$default-border-radius);
  @include Mix.font-field-base($size: Fun.scale-percent(Var.$font-lg, 50));
  @include Mix.colors-field-base($background: $bg-color, $color: white);
  transition: 300ms ease;
  justify-self: center;
  cursor: pointer;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.349);

  & img {
    @include Mix.size-field-base($width: 4rem);
  }
}

.confirm-remove__background {
  @include Mix.div-field-base($display: flex);
  @include Mix.position-field-base($position: fixed);
  @include Mix.align-field-base($justify: center, $align: center);
  @include Mix.colors-field-base($background: rgba(0, 0, 0, 0.24));
  inset: 0;
  backdrop-filter: blur(3px);
}

.confirm-remove__box {
  @include Mix.div-field-base($display: flex, $direction: column, $gap: 2rem);
  @include Mix.size-field-base($width: 55rem);
  @include Mix.spacing-field-base($padding: 2rem);
  @include Mix.box-frame-field-base($radius: Var.$default-border-radius);
  @include Mix.align-field-base($justify: center, $align: center);
  @include Mix.colors-field-base($color: white, $background: Var.$gray-dark);
}

.confirm-remove__icon-text {
  @include Mix.div-field-base($display: flex, $gap: 2rem);
  @include Mix.align-field-base($justify: center, $align: center);
  margin-bottom: 2rem;

  & img {
    @include Mix.size-field-base($width: 15rem);
  }
}

.confirm-remove__button {
  @include Mix.div-field-base($display: flex, $gap: 4rem);
  @include Mix.align-field-base($justify: center, $align: center);

  & img {
    @include Mix.size-field-base($width: 3);
  }

  &-confirm {
    @include button-base(rgb(18, 134, 18));

    &:hover {
      background-color: rgb(4, 92, 4);
    }
  }

  &-cancel {
    @include button-base(rgb(180, 12, 12));

    &:hover {
      background-color: rgb(126, 8, 8);
    }
  }
}
</style>
