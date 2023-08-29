<script setup lang="ts">
import { Dropdown, ListGroup, ListGroupItem } from "flowbite-vue"
import { useCounterStore } from "./store"

defineProps<{ msg: string }>()

const store = useCounterStore()
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
  <div>
    <button class="capitalize m-3 p-3 rounded-xl outline" @click="store.increment">increment</button>
    <p class="text-lg text-center">{{  store.count  }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
