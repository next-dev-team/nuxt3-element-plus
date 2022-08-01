export const getPaymentLists = async (params = {}) => {
  const res = await $useFetch<any>('/payment', { params })

  console.log('meo0,res', res);


  return res
}
