<script lang="ts" setup>
import {
  ElTableColumn,
  ElTable,
  ElButton,
  ElPagination,
  ElSelect,
  ElOption,
} from 'element-plus'
import { getPaymentLists } from '~~/api/transactions'

useHead(() => ({
  title: 'homepage',
  meta: [
    {
      name: 'description',
      content: 'description',
    },
  ],
}))

const { data } = await useAsyncData('getPaymentLists', () =>
  getPaymentLists({ currency_code: 'EHK' }),
)

const handleClick = (e) => {
  console.log('click', e)
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const queryInfo = {
  query: '', // Query parameters
  pagenum: 10, // Current page number
  pagesize: 1, // Number of displays per page
}

// Total data pieces
const total = 0

const handleSizeChange = (newSize) => {}
// Listen for events when the page number value changes
const handleCurrentChange = (newPage) => {}
</script>

<template>
  <div>
    <PageSection class="bg-gray-100 h-20 items-center flex mb-0">
      <PageTitle text="C2C Orders" class="capitalize" />
    </PageSection>

    <PageWrapper>
      <PageSection>
        <el-select class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          /> </el-select
      ></PageSection>
      <PageBody>
        <PageSection>
          <div class="m-h-[36vh]">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column fixed prop="date" label="Date" width="auto" />
              <el-table-column prop="type" label="Type" width="auto" />
              <el-table-column prop="currency" label="Currency" width="auto" />
              <el-table-column prop="amount" label="Amount" width="auto" />
              <el-table-column prop="payment" label="Payment" width="auto" />
              <el-table-column prop="merchant" label="Merchant" width="auto" />
              <el-table-column prop="client" label="Client" width="auto" />
              <el-table-column fixed="right" label="Operations" width="120">
                <template v-slot="scope">
                  <el-button
                    link
                    type="primary"
                    size="small"
                    @click="() => handleClick(scope.row.date)"
                    >Detail</el-button
                  >
                  <el-button link type="primary" size="small">Edit</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              class="mt-4 flex justify-end"
              :current-page="queryInfo.pagenum"
              :page-sizes="[1, 2, 5, 10]"
              :page-size="queryInfo.pagesize"
              layout="total, sizes, prev, pager, next"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </div>
</template>
