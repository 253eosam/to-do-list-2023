<script setup lang="ts">
import { Input, Button } from "flowbite-vue"
import { computed, ref } from "vue"
import useLoginAuth from "./useSignUpAuth"

const { signUp } = useLoginAuth()

const email = ref("test01@gmail.com")
const password = ref("")
const validPassword = ref("")

const validityPassword = computed(() => {
  return password.value === validPassword.value
})

const signUpValidations = computed(() => {
  return [
    0 < email.value.length,
    0 < password.value.length,
    0 < validPassword.value.length,
    validityPassword.value
  ].every(item => item)
})

const onClickSignIn = () => {
  try {
    signUp(email.value ,  password.value)
  } catch (error) {
    console.log("[🚀 253eosam] |  file: SignUpBox.vue:29 |  onClickSignIn |  error:", error)
    console.log(error)
    
  }
}
</script>

<template>
  <div class="p-5 my-3">
    <div class="text-4xl my-10 leading-normal">
      <p>환영합니다.</p>
      <p>This is <a href="#" class="text-blue-500 underline">To Do List 2023</a>.</p>
    </div>
    <div @keydown.enter="onClickSignIn">
      <Input class="my-2" v-model="email" placeholder="enter your email" label="Email" />
      <Input class="my-2" v-model="password" placeholder="enter your password" label="Password" type="password" />
      <Input class="my-2" v-model="validPassword" placeholder="enter your password" label="Validity Password" type="password" >
        <template #helper>
          <p v-if="validPassword.length === 0">동일한 비밀번호를 입력해주세요.</p>
          <p v-else-if="!validityPassword" class="text-red-500">틀렸습니다.</p>
          <p v-else-if="validityPassword" class="text-green-500">완벽합니다.</p>
        </template>
      </Input>
      <div class="my-5 flex justify-end">
        <Button class="mx-1" color="light">이전</Button>
        <Button class="mx-1" gradient="green-blue" :disabled="!signUpValidations" @click="onClickSignIn">회원가입</Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
