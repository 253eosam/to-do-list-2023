import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default function()  {

  const signUp = async (email: string, password: string) => {
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log("[🚀 253eosam] |  file: useLoginAuth.ts:10 |  .then |  user:", user)

      return user

    } catch (error: any) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log("[🚀 253eosam] |  file: useLoginAuth.ts:15 |  errorCode:", errorCode)
      console.log("[🚀 253eosam] |  file: useLoginAuth.ts:17 |  errorMessage:", errorMessage)

      return errorMessage
    }
  }

  return {
    signUp
  }
}
