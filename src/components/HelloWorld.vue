<script setup lang="ts">
import { Dropdown, ListGroup, ListGroupItem } from "flowbite-vue"

defineProps<{ msg: string }>()
</script>

<template>
  <h1 className="text-3xl font-bold underline">{{ msg }}</h1>
  <dropdown text="Click me" placement="top">
    <list-group>
      <list-group-item>Item #1</list-group-item>
      <list-group-item>Item #2</list-group-item>
      <list-group-item>Item #3</list-group-item>
    </list-group>
  </dropdown>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
