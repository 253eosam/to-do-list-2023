<script setup lang="ts">
import { Input, Button } from "flowbite-vue"
import { ref } from "vue"

const email = ref("test01@gmail.com")
const password = ref("")

const onClickSignIn = async () => {
}

</script>


<template>
  <div @keydown.enter="onClickSignIn">
    <Input class="my-2" v-model="email" placeholder="enter your email" label="Email" />
    <Input class="my-2" v-model="password" placeholder="enter your password" label="Password" type="password" />
    <div class="my-5 flex justify-end">
      <Button class="mx-1" color="light" >회원가입</Button>
      <Button class="mx-1" gradient="green-blue" @click="onClickSignIn">로그인</Button>
    </div>
  </div>
</template>

<style>
</style>
