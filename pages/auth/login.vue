<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import { Delete, Share } from '@element-plus/icons-vue'
type Login = Pick<IUserApi.LoginParam, 'email' | 'phone' | 'type' | 'password'>
definePageMeta({
  layout: 'empty',
})
useHead(() => ({
  title: 'login',
  meta: [
    {
      name: 'page login',
      content: 'this is login page',
    },
  ],
}))

const formRef = ref<FormInstance>()
const { setAuth, setUserProfile } = useUserStore()
const { push } = useRouter()

const loginState = reactive<
  Login & {
    loginLoading?: boolean
  }
>({
  type: 'email',
})
const onSubmitLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', loginState.email)
      loginState.loginLoading = true
      $useFetch('/user/login', {
        method: 'post',
        params: {
          email: loginState.email,
          password: loginState.password,
          type: loginState.type,
        } as Login,
      })
        .then((res: { data: IUserApi.LoginRes }) => {
          const token = res?.data?.token
          if (token) {
            // setAuth(!!token)
            // setUserProfile(res?.data)
            push('/')
          }
        })
        .finally(() => {
          loginState.loginLoading = false
        })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const phoneMode = computed(() => loginState.type === 'phone')
const emailMode = computed(() => loginState.type === 'email')
</script>

<template>
  <div>
    <PageWrapper>
      <PageBody>
        <PageSection class="max-w-xl mx-auto" title="hello">
          <PageSectionTitle class="mb-10"> UMPAY Login </PageSectionTitle>
          <div class="mb-4 space-x-2">
            <ElButton
              size="large"
              class="capitalize"
              :type="emailMode ? 'info' : 'text'"
              :icon="Share"
              @click="loginState.type = 'email'"
            >
              {{ $t('email') }}
            </ElButton>
            <ElButton
              size="large"
              class="capitalize"
              :icon="Delete"
              :type="phoneMode ? 'info' : 'text'"
              @click="loginState.type = 'phone'"
            >
              {{ $t('phone') }}
            </ElButton>
          </div>
          <ElForm
            ref="formRef"
            :model="loginState"
            class="demo-ruleForm"
            label-position="top"
          >
            <ElFormItem
              label="Email"
              prop="email"
              :rules="[
                { required: true, message: 'email is required' },
                { type: 'email' },
              ]"
            >
              <ElInput
                v-model.number="loginState.email"
                size="large"
                type="text"
                autocomplete="off"
              />
            </ElFormItem>
            <ElFormItem
              label="Password"
              prop="password"
              :rules="[{ required: true, message: 'password is required' }]"
            >
              <ElInput
                v-model.number="loginState.password"
                size="large"
                type="password"
                autocomplete="off"
              />
            </ElFormItem>
            <ElButton
              :loading="loginState.loginLoading"
              size="large"
              type="primary"
              class="w-full"
              @click="onSubmitLogin(formRef)"
            >
              {{ $t('login') }}
            </ElButton>
          </ElForm>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </div>
</template>
