<script setup lang="ts">
import { ToastProvider } from "flowbite-vue"
</script>

<template>
  <div class="container">
  <toast-provider transition="slide-bottom">
    <router-view></router-view>
  </toast-provider>
  </div>
</template>

<style scoped>
.container {
  min-width: 320px;
  max-width: 500px;
  height: 100vh;
  margin: 0px auto;
  position: relative;
}
</style>
