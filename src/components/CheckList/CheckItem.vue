<script setup lang="ts">
import { computed } from "vue"
import CheckedIcon from "./CheckedIcon.vue"
import UncheckedIcon from "./UncheckedIcon.vue"

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
})

const IconEl = computed(() => {
  return props.checked ? CheckedIcon : UncheckedIcon
})
</script>

<template>
  <li class="flex items-center">
    <component :is="IconEl" />
    <slot></slot>
  </li>
</template>

<style></style>
