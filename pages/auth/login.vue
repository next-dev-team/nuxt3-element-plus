<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'

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

const numberValidateForm = reactive({
  age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    }
    else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}
</script>

<template>
  <ElForm
    ref="formRef"
    :model="numberValidateForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <ElFormItem
      label="age"
      prop="age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', message: 'age must be a number' },
      ]"
    >
      <ElInput
        v-model.number="numberValidateForm.age"
        type="text"
        autocomplete="off"
      />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="submitForm(formRef)">
        Submit
      </ElButton>
      <ElButton @click="resetForm(formRef)">
        Reset
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>
