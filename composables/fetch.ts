import { Delete } from '@element-plus/icons-vue'
import { Action, ElMessage, ElMessageBox } from 'element-plus'
import type { UseFetchOptions } from '#app'

export const $useFetch = async <DataT>(url: string, options: UseFetchOptions<DataT> = {}) => {
  const open = () => {
    ElMessageBox.alert(
      'something went wrong',
      'Warning',
      {
        type: 'warning',
        icon: markRaw(Delete),
      },
    )
  }

  const { userProfile } = useUserStore()
  let headers = {}

  if (false) {
    headers = {
      ...options.headers,
      // authorization: `Bearer ${userProfile?.value?.token}`,
    }
  }

  try {
    const res = await $fetch(`${useRuntimeConfig().public.apiBase}${url}`, {
      method: 'get',
      ...options,
      headers,
    })

    // open({ message: 'success', title: 'success' });

    return res
  }
  catch (err) {
    console.log('err', err);

    open()
  }
}

