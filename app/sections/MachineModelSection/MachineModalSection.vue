<template>
  <div @click="props.setIsOpen(false)" class="machine-creator__background">
    <div @click.stop class="machine-creator__box">
      <form class="machine-creator__form" @submit.prevent="onSubmit">
        <MachPreview :machName="machine.name || 'Nome da máquina...'" :machType="machine.type" :machStatus="machine.status" />

        <div class="machine-creator__input">
          <InputComponent :onChange="handlerMachName" id="name" name="name" textLabel="Nome:" :maxLenght="30" :value="machine.name" />
        </div>

        <div class="machine-creator__select">
          <SelectComponent :onChange="handlerMachIcon" name="type" id="type" textLabel="Tipo:" :type="MachineTypeModel" :value="machine.type" />
        </div>

        <div class="machine-creator__select">
          <SelectComponent :onChange="handerMachStatus" name="status" id="status" textLabel="Status:" :type="MachineStatusModel" :value="machine.status" />
        </div>

        <div class="machine-creator__input">
          <InputComponent name="location" id="location" textLabel="Localização:" :maxLenght="50" :value="machine.location" />
        </div>

        <div class="machine-creator__label">
          <TextAreaComponent name="description" id="description" textLabel="Descrição:" :maxLenght="100" :value="machine.description" />
        </div>

        <div class="machine-creator__date">
          <div class="machine-creator__start">
            <InputComponent name="start" id="start" type="date" textLabel="Início:" :value="machine.start" />
          </div>
          <div class="machine-creator__return">
            <InputComponent name="return" id="return" type="date" textLabel="Retorno:" :value="machine.return" />
          </div>
        </div>

        <div class="machine-creator__button">
          <ButtonComponent className="machine-creator__button-confirm" type="submit" icon="ConfirmIcon">
            {{ props.machine?.id ? "Atualizar" : "Adicionar" }}
          </ButtonComponent>

          <ButtonComponent className="machine-creator__button-exclude" icon="Exclude" v-if="machine.id" @click="confirm.isOpen = true"> Excluir </ButtonComponent>

          <ButtonComponent className="machine-creator__button-cancel" @click="props.setIsOpen(false)" icon="CancelIcon"> Cancelar </ButtonComponent>
        </div>
      </form>

      <ConfirmRemove v-if="confirm.isOpen" :machine="machine.name" :setConfirmOpen="(v) => (confirm.isOpen = v)" :onConfirm="onConfirmDelete" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, inject } from "vue";
import { MachineTypeModel } from "~/models/MachineTypeModel";
import { MachineStatusModel } from "~/models/MachineStatusModel";
import MachPreview from "./fragments/MachPreview.vue";
import InputComponent from "~/components/InputComponent.vue";
import TextAreaComponent from "~/components/TextAreaComponent.vue";
import ButtonComponent from "~/components/ButtonComponent.vue";
import ConfirmRemove from "./fragments/ConfirmRemove.vue";
import type { Machine } from "~/models/MachineModel";
import { createNewMachine, updateExistingMachine, removeExistingMachine } from "./Script";
import "./MachineModalStyle.scss";

const props = defineProps<{
  setIsOpen: (v: boolean) => void;
  machine?: Machine | null;
}>();

const machine = reactive<Machine>({
  id: props.machine?.id ?? null,
  name: props.machine?.name ?? "",
  type: props.machine?.type ?? 1,
  status: props.machine?.status ?? 1,
  createdAt: props.machine?.createdAt ?? new Date(),
  lastUpdatedAt: props.machine?.lastUpdatedAt ?? new Date(),
  location: props.machine?.location ?? null,
  description: props.machine?.description ?? null,
  start: props.machine?.start ? new Date(props.machine.start).toISOString().split("T")[0] : null,
  return: props.machine?.return ? new Date(props.machine.return).toISOString().split("T")[0] : null,
});

const confirm = reactive({
  isOpen: false,
});

const loading = inject<{ setIsLoading: (v: boolean) => void }>("loading");
const notification = inject<{ setNotification: (message: string, type: "success" | "error" | "warning" | "info", duration: number) => void }>("notification");

function handlerMachIcon(value: number) {
  machine.type = value;
}

function handlerMachName(name: string) {
  machine.name = name;
}

function handerMachStatus(status: number) {
  machine.status = status;
}

function onSubmit(e: SubmitEvent) {
  if (!loading || !notification) return;

  if (machine.id === null) {
    createNewMachine({ e, setIsLoading: loading.setIsLoading, setNotification: notification.setNotification, setIsOpen: props.setIsOpen });
  } else {
    updateExistingMachine(machine.id!, { e, setIsLoading: loading.setIsLoading, setNotification: notification.setNotification, setIsOpen: props.setIsOpen });
  }
}

function onConfirmDelete() {
  if (!loading || !notification || !machine.id) return;

  removeExistingMachine(machine.id, {
    setIsLoading: loading.setIsLoading,
    setNotification: notification.setNotification,
    setIsOpen: props.setIsOpen,
  });

  confirm.isOpen = false;
}

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>
