import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

class ResSignUp {
  constructor(public isSuccess: boolean, public code: string | null, public message: string | null) {}
}

export default function () {
  const signUp = async (email: string, password: string): Promise<ResSignUp> => {
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log("[🚀 253eosam] |  file: useSignUpAuth.ts:10 |  signUp |  user:", user)
      return new ResSignUp(true, "success", "sign up success..!")
    } catch (error: any) {
      const errorCode = error?.code ?? "unknown error"
      const errorMessage = error?.message || "unknown error"
      return new ResSignUp(false, errorCode, errorMessage)
    }
  }

  return {
    signUp,
  }
}
