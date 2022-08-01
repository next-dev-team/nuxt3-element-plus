


/**
 * @example
 *  const {isAuth,setAuth } = useUserStore()
 *  setAuth(true)
 *  console.log(isAuth) => true
 */

export const useUserStore = defineStore('useUserStore', () => {

  const isAuthState = useStateCookie<boolean>('isAuth')
  const userProfileState = useStateCookie<IUserApi.LoginRes>('userProfile')

  /**
   * logout and clear
   */
  const logout = () => {
    isAuthState.value = false
  }

  const setAuth = (auth: boolean) => {
    isAuthState.value = auth
  }
  const setUserProfile = (value: IUserApi.LoginRes) => {
    userProfileState.value = value
  }
  const isAuth = computed(() => isAuthState)
  const userProfile = computed(() => userProfileState)


  return {
    isAuth,
    userProfile,
    setAuth,
    setUserProfile,
    logout,
  }
})

// if (import.meta.hot)
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
