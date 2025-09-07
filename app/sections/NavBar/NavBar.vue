<template>
  <nav>
    <ImageComponent staticImg="AppLogoIcon" />
    <div class="navbar__div-search">
      <div class="navbar__div-icon-wrapper">
        <ImageComponent staticImg="SearchIcon" />
      </div>
      <InputComponent placeHolder="Buscar..." />
    </div>
  </nav>
</template>

<script setup lang="js">
import ImageComponent from "~/components/ImageComponent.vue";
import InputComponent from "~/components/InputComponent.vue";
import "./NavBarStyle.scss";
</script>
