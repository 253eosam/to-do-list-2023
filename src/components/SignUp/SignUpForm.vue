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
  return [0 < email.value.length, 0 < password.value.length, 0 < validPassword.value.length, validityPassword.value].every((item) => item)
})

const onClickSignIn = async () => {
  const result = await signUp(email.value, password.value)
  console.log("[🚀 253eosam] |  file: SignUpForm.vue:22 |  onClickSignIn |  result:", result)
  
}

import { useToast } from "flowbite-vue"

const { add } = useToast()

const onClickTest = () => {
  add({
  text: "Hello",
  time: 1000,
  type: "danger",
})
}
</script>

<template>
  <div @keydown.enter="onClickSignIn">
    <Input class="my-2" v-model="email" placeholder="enter your email" label="Email" />
    <Input class="my-2" v-model="password" placeholder="enter your password" label="Password" type="password" />
    <Input class="my-2" v-model="validPassword" placeholder="enter your password" label="Validity Password" type="password">
      <template #helper>
        <p v-if="validPassword.length === 0">동일한 비밀번호를 입력해주세요.</p>
        <p v-else-if="!validityPassword" class="text-red-500">틀렸습니다.</p>
        <p v-else-if="validityPassword" class="text-green-500">완벽합니다.</p>
      </template>
    </Input>
    <div class="my-5 flex justify-end">
      <Button class="mx-1" color="light" @click="onClickTest">이전</Button>
      <Button class="mx-1" gradient="green-blue" :disabled="!signUpValidations" @click="onClickSignIn">회원가입</Button>
    </div>
  </div>
</template>

<style scoped></style>
