const routes = [
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/pages/HomePage.vue")
  },
  {
    path: "/",
    name: "Features",
    component: () => import("@/pages/FeaturesPage.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("@/pages/SignUpPage.vue")
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@/pages/SignInPage.vue")
  },
]

export default routes