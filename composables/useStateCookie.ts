
// Expires in a year
// const expires = new Date();
// expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));

// Make cookie use state across app
export default function useStateCookie<T>(name: string) {
  const cookie = useCookie<T>(name, {});
  const state = useState(name, () => cookie.value);

  watch(state, () => { cookie.value = state.value; }, { deep: true });

  return state;
}
