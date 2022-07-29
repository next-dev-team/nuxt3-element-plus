import { Delete } from '@element-plus/icons-vue'
import { Action, ElMessage, ElMessageBox } from 'element-plus'
import type { UseFetchOptions } from '#app'

export const $useFetch = async <DataT>(url: string, options: UseFetchOptions<DataT> = {}) => {
  const open = () => {
    ElMessageBox.confirm(
      'It will permanently delete the file. Continue?',
      'Warning',
      {
        type: 'warning',
        icon: markRaw(Delete),
      },
    )
  }

  const token = useDark()
  let headers = {}

  if (token.value) {
    headers = {
      ...options.headers,
      authentication: `Bearer ${token.value}`,
    }
  }

  try {
    const res = await $fetch(`${useRuntimeConfig().public.apiBase}${url}`, {
      ...options,
      headers,
    })

    // open({ message: 'success', title: 'success' });

    return res
  }
  catch {
    open({ message: 'something went wrong', title: 'Error' })
  }
}

