import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as signOutAuth } from "firebase/auth"

interface User {
  email: string
  password: string
}

class ReturnUserAuth {
  constructor(public isSuccess: boolean, public code: string | null, public message: string | null) {}
}

export default function () {
  const auth = getAuth()
  console.log("[🚀 253eosam] |  file: useUserAuth.ts:14 |  auth:", auth)

  const signUp = async (email: User["email"], password: User["password"]): Promise<ReturnUserAuth> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log("[🚀 253eosam] |  file: useSignUpAuth.ts:10 |  signUp |  user:", user)
      return new ReturnUserAuth(true, "success", "sign up success..!")
    } catch (error: any) {
      const errorCode = error?.code ?? "unknown error"
      const errorMessage = error?.message || "unknown error"
      return new ReturnUserAuth(false, errorCode, errorMessage)
    }
  }

  const signIn = async (email: User["email"], password: User["password"]): Promise<ReturnUserAuth> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log("[🚀 253eosam] |  file: useSignUpAuth.ts:10 |  signUp |  user:", user)
      return new ReturnUserAuth(true, "success", "sign up success..!")
    } catch (error: any) {
      const errorCode = error?.code ?? "unknown error"
      const errorMessage = error?.message || "unknown error"
      return new ReturnUserAuth(false, errorCode, errorMessage)
    }

  }

  const signOut = async () => {
    const result = await signOutAuth(auth)
    console.log("[🚀 253eosam] |  file: useSignOut.ts:7 |  signOut |  result:", result)
  }

  return {
    signUp,
    signIn,
    signOut
  }
}