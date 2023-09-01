<script setup lang="ts">
import SignUpPage from "@/pages/SignUpPage.vue"
import { ToastProvider } from "flowbite-vue"
</script>

<template>
  <div class="container">
  <toast-provider transition="slide-bottom">
    <SignUpPage />
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
