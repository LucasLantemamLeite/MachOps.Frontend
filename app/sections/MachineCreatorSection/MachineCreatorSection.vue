<template>
  <div @click="setIsOpen(false)" class="machine-creator__background">
    <div @click.stop class="machine-creator__box">
      <form class="machine-creator__form">
        <MachPreview :machName="machine.name" :machType="machine.type" :machStatus="machine.status" />

        <div class="machine-creator__input">
          <InputComponent :onChange="handlerMachName" id="name" name="name" textLabel="Nome:" :maxLenght="30" />
        </div>

        <div class="machine-creator__select">
          <SelectComponent :onChange="handlerMachIcon" name="type" id="type" textLabel="Tipo: " :type="MachineTypeModel" />
        </div>

        <div class="machine-creator__select">
          <SelectComponent :onChange="handerMachStatus" name="status" id="status" textLabel="Status: " :type="MachineStatusModel" />
        </div>

        <div class="machine-creator__input">
          <InputComponent name="location" id="location" textLabel="Localização:" :maxLenght="50" />
        </div>

        <div class="machine-creator__label">
          <TextAreaComponent name="description" id="description" textLabel="Descrição:" :maxLenght="100" />
        </div>

        <div class="machine-creator__date">
          <div class="machine-creator__start">
            <InputComponent name="start" id="start" type="date" textLabel="Início:" />
          </div>
          <div class="machine-creator__return">
            <InputComponent name="return" id="return" type="date" textLabel="Retorno:" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MachineTypeModel } from "~/models/MachineTypeModel";
import { MachineStatusModel } from "~/models/MachineStatusModel";
import TextAreaComponent from "~/components/TextAreaComponent.vue";
import InputComponent from "~/components/InputComponent.vue";
import MachPreview from "./fragments/MachPreview.vue";
import "./MachineCreatorStyle.scss";

const machine = reactive({
  name: "Nome da máquina",
  type: 1,
  status: 1,
});

function handlerMachIcon(value: number) {
  machine.type = value;
}

function handlerMachName(name: string) {
  if (!name || name.trim().length === 0) {
    machine.name = "Nome da máquina...";
    return;
  }

  if (name.length <= 30) machine.name = name;
}

function handerMachStatus(status: number) {
  machine.status = status;
}

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});

defineProps<{
  setIsOpen: (v: boolean) => void;
}>();
</script>
