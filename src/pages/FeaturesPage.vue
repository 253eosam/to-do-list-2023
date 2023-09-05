<script setup lang="ts">
import CheckItem from "@/components/CheckList/CheckItem.vue"
</script>

<template>
  <div class="p-10">
    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">기능 리스트</h2>
    <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
      <CheckItem class="underline text-blue-500">
        <router-link :to="{ name: 'Home' }">홈</router-link>
      </CheckItem>
      <CheckItem checked class="underline text-blue-500">
        <router-link to="/sign-up">회원가입</router-link>
      </CheckItem>
      <CheckItem class="underline text-blue-500">
        <router-link to="/sign-in">로그인</router-link>
      </CheckItem>
    </ul>
  </div>
</template>

<style></style>
