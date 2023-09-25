<script setup lang="ts">
import { Input, Button, useToast } from "flowbite-vue"
import { ref } from "vue"
import useUserAuth from "@/hooks/useUserAuth"

const { signIn } = useUserAuth()
const { add } = useToast()

const email = ref("")
const password = ref("")

const onClickSignIn = async () => {
  const { isSuccess, code, message } = await signIn(email.value, password.value)
  console.log("[🚀 253eosam] |  file: SignUpForm.vue:24 |  onClickSignIn |  { isSuccess, code, message }:", { isSuccess, code, message })
  add({
    text: message as string,
    time: 3000,
    type: isSuccess ? "success" : "danger",
  })
}

</script>


<template>
  <div @keydown.enter="onClickSignIn">
    <Input class="my-2" v-model="email" placeholder="ex) test01@gmail.com" label="Email" />
    <Input class="my-2" v-model="password" placeholder="ex) q1w2e3r4" label="Password" type="password" />
    <div class="my-5 flex justify-end">
      <Button class="mx-1" color="light" >회원가입</Button>
      <Button class="mx-1" gradient="green-blue" @click="onClickSignIn">로그인</Button>
    </div>
  </div>
</template>

<style>
</style>
../../hooks/useSignInAuth