<script lang="ts" setup>
import {
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElMenuItemGroup,
  ElMenuItem,
} from 'element-plus'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { colors } from '@/constants'

const isCollapse = ref(false)
</script>

<template>
  <el-menu
    default-active="1-1"
    class="el-menu-vertical"
    :collapse="isCollapse"
    :active-text-color="colors.primary[600]"
    :text-color="colors.title[300]"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <img class="w-6 h-6" src="/icons/trnx.png" />
        </el-icon>
        <span>Transaction</span>
      </template>
      <el-menu-item index="1-1">List Payment</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
